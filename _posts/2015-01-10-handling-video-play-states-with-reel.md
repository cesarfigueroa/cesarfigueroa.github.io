---
title: Handling Video Play States with Reel
date: 2015-01-10
excerpt: null
---

Last month, I worked alongside a fellow designer on adding a background video to a marketing page. I talked about the [challenges](http://cesarfigueroa.org/posts/looping-videos-in-chrome/) of serving that video to Chrome and Opera, but working on it opened an opportunity to further improve the experience of viewing that background video. Since the background video is muted, it doesn’t make sense to continue playing it in the user’s absence.

After working on the project, I went back and came up with a few technical scenarios that determined when a user was away from the video, such as switching to a different tab or scrolling beyond the video. Aided by some excellent browser APIs, I managed to control the video’s play state based on certain actions. I packaged my work into a tiny library I call [Reel](https://github.com/cesarfigueroa/reel), and it’s available on Github—along with usage details.
