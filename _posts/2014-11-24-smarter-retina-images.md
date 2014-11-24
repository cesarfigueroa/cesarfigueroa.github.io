---
title: Smarter Retina Images with <picture>
date: 2014-11-24
excerpt: A clever trick for serving retina images on mobile and desktop devices.
---

Often times, when serving images on mobile devices with retina screens, there’s enough data in the image for it to be rendered at double the pixels. Unfortunately, a lot of solutions for serving images on retina screens don’t take advantage of this. There’s a simple solution for capitalizing on this extra data—so mobile users don’t end up downloading unneeded pixels.

Say you have an image gallery, and by default, the images are 640 pixels wide. On a mobile device, that image would appear to be @2x—so there’s no need to serve it’s 1280 pixel-wide variant. With some `<picture>` magic, we can do just that.

```html
<picture>
  <source media="(min-width: 480px)" srcset="photo.jpg 1x, photo@2x.jpg 2x" />
  <img src="photo.jpg" />
</picture>
```

The snippet above serves `photo.jpg` to all retina screens with a viewport up to 480 pixels wide, as well as all non-retina screens. Any retina screen with a viewport above 480 pixels will be served the @2x image.
