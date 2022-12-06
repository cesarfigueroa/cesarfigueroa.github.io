import { pipe as _ } from "fp-ts/lib/function";
import { concat, Observable } from "rxjs";
import { delay, distinctUntilChanged, map, switchMap } from "rxjs/operators";
import { h } from "snabbdom";

import { spring } from "../lib/spring";
import { Component } from "../lib/types";
import { combineVNodes } from "../lib/vnode";

const springConfig = {
  mass: 2,
  damping: 15,
  // stiffness: number;
};

function getRandomTs(max = 500, min = 15) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCharacter() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

const SPACE_CHAR = " ";
export const TextScatter: Component<{ title: Observable<string> }> = (
  props
) => {
  // return of(h("span", null, [props.title.split('')]));
  return _(
    props.title,
    distinctUntilChanged(),
    switchMap((str) => {
      const chars = str.split("");
      const CHAR_MAP: Record<number, string> = chars.reduce(
        (acc, char, i) => ({
          ...acc,
          [i]: char === SPACE_CHAR ? SPACE_CHAR : getRandomCharacter(),
        }),
        {}
      );

      return combineVNodes(
        h("p.experience-desc", { style: { whiteSpace: "pre-wrap" } })
      )(
        ...chars.map((char, charIdx) =>
          concat(
            _(
              spring(springConfig),
              map((n) =>
                h(
                  `span`,
                  {
                    key: charIdx,
                    style: { opacity: `${n.currentValue}` },
                  },
                  CHAR_MAP[charIdx]
                )
              ),
              delay(getRandomTs())
            ),
            _(
              spring(springConfig),
              map((n) =>
                h(
                  `span`,
                  {
                    key: charIdx,
                    style: { opacity: `${n.currentValue}` },
                  },
                  CHAR_MAP[charIdx]
                )
              ),
              delay(getRandomTs())
            ),
            _(
              spring(springConfig),
              map((n) =>
                h(
                  `span`,
                  {
                    key: charIdx,
                    style: { opacity: `${n.currentValue}` },
                  },
                  char
                )
              )
              // delay(getRandomTs())
            )
          )
        )
      );
    })
  );
};
