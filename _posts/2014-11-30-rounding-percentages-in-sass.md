---
title: Rounding Percentages in Sass
date: 2014-11-30
excerpt: Getting around Sass’ precision option
---

Whenever you’re using percentages with infinitely repeating decimals, browsers expect a certain amount of decimal points to round correctly—Safari, for instance, is happy with 7. Unfortunately, if you’re running Sass in a controlled environment—such as Jekyll on GitHub Pages—changing Sass’s precision option from it’s default of 5 to something larger isn’t possible.

To get around this, I’ve devised a small function that adds 1 to the least significant decimal point, giving browsers the nudge they need to round to the correct pixel value.

```sass
@function percentage($fraction) {
  @return (($fraction) + 0.0000001) * 100%;
}
```

Happy rounding!
