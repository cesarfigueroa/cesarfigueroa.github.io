import { pipe as _ } from "fp-ts/lib/function";
import { Observable, combineLatest } from "rxjs";
import { scan } from "rxjs/operators";
import { fragment, h, VNode } from "snabbdom";

export function combineVNodes(parent?: VNode): (
  // a$: Observable<VNode>,
  ...nodes$: Array<Observable<VNode>>
) => Observable<VNode> {
  return (...nodes$) =>
    _(
      combineLatest(nodes$),
      scan((_, nodes) => {
        return parent && parent.sel && parent.data
          ? h(parent.sel, parent.data, nodes)
          : fragment(nodes);
      }, h("!"))
    );
}
