// const Rx = window.rxjs as any;
// const Popmotion = window.popmotion as any;

// import Rx from "rxjs";
import { pipe as _ } from "fp-ts/lib/function";
import { h } from "snabbdom";
import { IntroChar } from "../components/IntroChar";
import { combineVNodes } from "../lib/vnode";
import type { Component } from "../lib/types";

const STAGGER = 0;

export const Intro: Component<{
  damping: number;
  mass: number;
  stiffness: number;
}> = (props) =>
  combineVNodes(h("div#container"))(
    // DampingSlider({ damping: props.damping }),
    // MassSlider({ mass: props.mass }),
    // StiffnessSlider({ stiffness: props.stiffness }),
    combineVNodes(h("strong#intro"))(
      IntroChar({
        letter: "H",
        mass: props.mass,
        damping: props.damping,
        stiffness: props.stiffness,
        delay: 0,
      }),
      IntroChar({
        letter: "e",
        mass: props.mass,
        damping: props.damping,
        stiffness: props.stiffness,
        delay: STAGGER,
      }),
      IntroChar({
        letter: "y",
        mass: props.mass,
        damping: props.damping,
        stiffness: props.stiffness,
        delay: STAGGER * 2,
      })
    )
  );
