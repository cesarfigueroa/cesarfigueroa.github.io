---
title: Introducing Gridlines
date: 2014-11-16
excerpt: On building Gridlines, a Sass mixin for generating grid backgrounds with ease.
---

Traditionally, grid backgrounds have been a pain to make and maintain. Open Photoshop, draw a set of columns, gutters, and padding, and export an image to your project’s directory. Any small change along the way, and you have to repeat the entire process. If you’re working with multiple grids for use in different viewport sizes, then that process is doubled or tripled.

There are some tools, such as [Gridulator](http://gridulator.com) or [Gridpak](http://gridpak.com), that ease the pain of creating these images, but they’re still images, so you still have to save them and rename them any time you make a small change. [Gridlines](https://github.com/cesarfigueroa/sass-gridlines) attempts to solve this.

Gridlines is a Sass mixin that intelligently generates linear-gradients based on four parameters: the width of the column, gutter, and padding, and the height of the baseline. You can feed the mixin any or all of these values, and it will do the heavy lifting—while warning you if any arguments passed conflict.

Gridlines is available on [GitHub](https://github.com/cesarfigueroa/sass-gridlines) and Bower (`bower install sass-gridlines`). Happy gridding!
