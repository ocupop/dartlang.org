---
reference: "https://www.dartlang.org/docs/tutorials/"

layout: page
title: "Dart VM Tutorials"
description: "The Dart VM Tutorials&mdash;Your guide to building great apps."
toc: false

nextpage:
  url: cmdline
  title: Write Command-Line Apps

tutorial:
  id: tut-home
header:
  css: ["/docs/tutorials/tute_main_page.css"]
---

{% capture content %}

<img class="scale-img-max" src="images/banner.png">

**The Dart VM Tutorials** teach you how to build command line and
server applications using the Dart language, tools, and APIs.

<strong>Who are you?</strong>
<ul>
<li> You already know how to program in a structured language like C or Java.</li>
<li> You are familiar with object-oriented programming.</li>
<li> You might not know how to program the browser
     through the DOM (Document Object Model).</li>
</ul>

You can write standalone programs, such as servers and scripts, in Dart.

<div class="row">

<section>
  <h4 class="no-permalink"><a href="cmdline/"><img src="images/target.png" height="20" width="20">&nbsp;Write Command-line Apps</a></h4>
  <p>Learn about features that command-line apps need.</p>
  <img src="images/cmdline-code.png" width="100%">
</section>

<section>
  <h4 class="no-permalink"><a href="/docs/tutorials/httpserver/"><img src="images/target.png" height="20" width="20">&nbsp;Write HTTP Clients & Servers</a></h4>
  <p>Communicate over the internet.</p>
  <img src="images/httpserver-code.png" width="100%">
</section>

<hr style="border:solid;border-color:Gainsboro">

{% endcapture %}

{% include tutorial_main_page.html %}
