import { pipe as _ } from "fp-ts/lib/function";
import { timer } from "rxjs";
import { map, mergeMap, startWith } from "rxjs/operators";
import { h } from "snabbdom";

import { spring } from "../lib/spring";
import type { Component } from "../lib/types";

export const IntroChar: Component<{
  letter: string;
  mass: number;
  damping: number;
  stiffness: number;
  delay: number;
}> = (props) =>
  _(
    timer(props.delay),
    mergeMap(() =>
      _(
        spring({
          mass: props.mass,
          damping: props.damping,
          stiffness: props.stiffness,
        }),
        map((n) =>
          h(
            `span#intro-${props.letter}`,
            {
              key: props.letter,
              style: {
                fontVariationSettings: `'wght' ${Math.round(
                  n.currentValue * 700
                )}`,
              },
            },
            props.letter
          )
        )
      )
    ),
    startWith(
      h(
        `span#intro-${props.letter}`,
        {
          key: props.letter,
          style: {
            fontVariationSettings: `'wght' 300`,
          },
        },
        props.letter
      )
    )
  );
