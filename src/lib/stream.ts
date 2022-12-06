import { pipe as _ } from "fp-ts/lib/function";
import { Observable, of, fromEvent, EMPTY } from "rxjs";
import { mergeMap, take } from "rxjs/operators";

function observeElementMutations$(
  el: Element
): Observable<Array<MutationRecord>> {
  return new Observable((subscriber) => {
    const observer = new MutationObserver((v) => {
      subscriber.next(v);
    });

    observer.observe(el, { subtree: true, childList: true });

    return () => {
      observer.disconnect();
    };
  });
}

function waitForElement<T extends Element>(
  root: Element
): (selector: string) => Observable<T> {
  return (selector) =>
    _(
      observeElementMutations$(root),
      mergeMap(() => {
        const el = document.querySelector(selector) as T;
        const exists = !!el;
        return exists ? of(el) : EMPTY;
      }),
      take(1)
    );
}

export function fromElement<T extends Element>(
  root: Element = document.body
): (selector: string) => Observable<Event> {
  return (selector) =>
    _(
      waitForElement<T>(root)(selector),
      mergeMap((inputEl) => fromEvent(inputEl, "change"))
    );
}
