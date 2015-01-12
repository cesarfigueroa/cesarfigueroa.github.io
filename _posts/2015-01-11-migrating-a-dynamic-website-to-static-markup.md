---
title: Migrating a Dynamic Website to Static Markup
date: 2015-01-11
excerpt: null
---

This week, I finish one the longest projects I took on since joining the [8th Light](http://8thlight.com) team back in November: migrating our website to static markup. The current website was built on Clojure, using a set of homemade tools, and it’s beginning to show its age. It’s time to move on and iterate.

While working on the static rewrite, I got the opportunity to shape the foundation of a flexible codebase. Ensuring it’s friendly to everyone updating it involves knowing the system inside and out, and leveraging all that your tools have to offer. Along the way, I learned a few lessons on what it takes to achieve this sort of flexibility, and some ways to take advantage of a new environment.

### No Database? No Problem.

Moving from a dynamic website to a set of a static files presented an obvious drawback: the lack of a database. For the new website, we settled on [Middleman](https://middlemanapp.com) as our static site generator. Middleman—and other generators like it—come with support for [data files](https://middlemanapp.com/advanced/local-data/), which allow you to extract plain data away from your markup and reuse it throughout.

With data files, we were able to extract things like our list of team members and the availability of careers in our various offices, without needing complex databases and SQL queries. Instead, we write our data in plain text files—and those can be easily read and edited by anyone on our team.

### Reducing Dependencies

The existing site isn’t JavaScript heavy, but it relies on jQuery—and strangely, Dojo—to accomplish some very basic tasks.

In building the new codebase, I took the opportunity to rewrite these as simple JavaScript modules—with zero dependencies. I was able to reduce the existing 10,000+ lines of JavaScript (minified) to less than 200—an incredible performance gain, especially for mobile users.

### Choosing Your Battles

When taking the liberty to rewrite certain pieces of the codebase, it became very tempting to want to rewrite _everything_, and ensure the new release was as maintainable as possible. However, I knew this would take a considerable amount of time, and the clock was ticking—the longer I took on the rewrite, the more catching up I would have to do with changes made to the existing codebase.

In the end, I decided give up on some of these battles, and improve them in smaller iterations after the initial launch. That’s the beauty of software.
