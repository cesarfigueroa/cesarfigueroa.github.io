import { pipe as _ } from "fp-ts/lib/function";
import { timer } from "rxjs";
import { map, scan } from "rxjs/operators";
import { init, classModule, propsModule, styleModule } from "snabbdom";

import { Intro } from "./components/Intro";
import { TextScatter } from "./components/TextScatter";

const patch = init(
  [
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    // eventListenersModule, // attaches event listeners
  ],
  undefined,
  {
    experimental: {
      fragments: true,
    },
  }
);

export function main() {
  const container = document.querySelector("#container") as HTMLDivElement;
  // const experienceTitle = document.querySelector(
  //   "#experienceTitle"
  // ) as HTMLTitleElement;

  const experienceDesc = document.querySelector(
    "#experienceDesc"
  ) as HTMLParagraphElement;

  // @effect Patch Intro text into #container
  _(
    Intro({ mass: 1, damping: 10, stiffness: 100 }),
    scan(patch, container)
  ).subscribe();

  const TITLE_A =
    "Co-founded a software engineering studio, working with select clients on early stage projectsLed engineering hiring and trainingDeveloped an in-house framework for use in projects, based on typed functional programming and streams";
  const TITLE_B =
    "I lead projects and teams making durable, inclusive, and delightful software for web and mobile. For over a decade, I’ve helped companies of all sizes—from early-stage startups to well established giants—bring digital experiences to their audiences";
  // @effect Patch Intro text into #container
  _(
    TextScatter({
      title: _(
        timer(0, 4000),
        map((_n, i) => (i % 2 === 0 ? TITLE_A : TITLE_B))
      ),
    }),
    scan(patch, experienceDesc)
  ).subscribe();
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
