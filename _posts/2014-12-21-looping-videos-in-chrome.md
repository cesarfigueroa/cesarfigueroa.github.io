---
title: Looping Videos in Chrome and Opera
date: 2014-12-21
excerpt: null
---

This week, I worked alongside a fellow designer on adding a background video to a marketing page. The video was positioned as a hero image and set to loop forever, so as to provide a taste of what the full video is like (clicking on it revealed the full, audible video). The process was straightforward: optimize the video, add it through the `video` tag with the appropriate attributes, and provide a fallback image for older browsers and mobile devices.

Only, there was one problem: Google Chrome and Opera don't support video looping, unless you serve the video under a `206 Partial Content` response, or provide the `Accept-Ranges` header.

```
Accept-Ranges: bytes
```

Fortunately, our remote server provided this header for us, and we realized this as soon as we moved our changes into the staging environment. Unfortunately, our development environment didn’t, and we won’t always have the luxury of configuring our server to deliver the video this way.

So, we explored our options. We we’re already using Vimeo to serve our main video, so why not use that to serve the background video as well? Using a Pro account, Vimeo allows for third-party video players (i.e. hotlinking), and by default, provides the necessary headers. Alternatively, Vimeo lets you both autoplay and loop the video from it’s [embedding options](https://vimeo.com/help/faq/sharing-videos/embedding-videos#how-do-i-set-videos-to-autoplay-or-loop-when-i-embed-them), so even without a Pro account, this is possible. Thanks, Vimeo!
