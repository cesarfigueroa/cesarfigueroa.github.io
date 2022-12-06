import { Observable, of } from "rxjs";
import { startWith } from "rxjs/operators";
import { h } from "snabbdom";
import { pipe as _ } from "fp-ts/lib/function";
import { fromElement } from "../lib/stream";
import { Component } from "../lib/types";
import { combineVNodes } from "../lib/vnode";

const INITIAL_MASS = 1;
const INITIAL_DAMPING = 10;
const INITIAL_STIFFNESS = 100;

export const springDamping$: Observable<number> = _(
  fromElement()("input#damping"),
  // @ts-ignore
  map((e) => e.currentTarget.valueAsNumber),
  startWith(INITIAL_DAMPING)
);

export const springMass$: Observable<number> = _(
  fromElement()("input#mass"),
  // @ts-ignore
  map((e) => e.currentTarget.valueAsNumber),
  startWith(INITIAL_MASS)
);

export const springStiffness$: Observable<number> = _(
  fromElement()("input#stiffness"),
  // @ts-ignore
  map((e) => e.currentTarget.valueAsNumber),
  startWith(INITIAL_STIFFNESS)
);

export function AnimationDebug() {
  const DampingSlider: Component<{ damping: number }> = (props) =>
    of(
      h("div", {}, [
        h("label", null, [
          `Damping ${props.damping}`,
          h("input#damping", {
            props: {
              type: "range",
              min: 1,
              max: 100,
              value: props.damping,
            },
          }),
        ]),
      ])
    );

  const MassSlider: Component<{ mass: number }> = (props) =>
    of(
      h("div", {}, [
        h("label", null, [
          `Mass ${props.mass}`,
          h("input#mass", {
            props: {
              type: "range",
              min: 1,
              max: 100,
              value: props.mass,
            },
          }),
        ]),
      ])
    );

  const StiffnessSlider: Component<{ stiffness: number }> = (props) =>
    of(
      h("div", {}, [
        h("label", null, [
          `Stiffness ${props.stiffness}`,
          h("input#stiffness", {
            props: {
              type: "range",
              min: 1,
              max: 1000,
              value: props.stiffness,
            },
          }),
        ]),
      ])
    );

  return combineVNodes()(
    DampingSlider({ damping: 10 }),
    MassSlider({ mass: 1 }),
    StiffnessSlider({ stiffness: 100 })
  );
}
