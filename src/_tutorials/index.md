---
reference: "https://www.dartlang.org/docs/tutorials/"

layout: page
title: "Dart Tutorials"
description: "The Dart Tutorials&mdash;Your guide to building great web apps."
toc: false

nextpage:
  url: /tutorials/get-started
  title: Get Started

tutorial:
  id: tut-home
header:
  css: ["/docs/tutorials/tute_main_page.css"]
---


<img class="scale-img-max" src="images/banner.png">

**The Dart Tutorials** teach you how to build web applications
using the Dart language, tools, and APIs.

<strong>Who are you?</strong>
<ul>
<li> You already know how to program in a structured language like C or Java.</li>
<li> You are familiar with object-oriented programming.</li>
<li> You might not know how to program the browser
     through the DOM (Document Object Model).</li>
</ul>

<strong>Let's go!</strong> Follow the tutorials in order
from left to right...or choose just the ones you need.

<div class="tute-tabs">
<div class="tabbable">
  <ul class="nav nav-tabs">
    <li class="active"><a href="#basics" data-toggle="tab">Get started</a></li>
    <li><a href="#packages" data-toggle="tab">Packages</a></li>
    <li><a href="#futures" data-toggle="tab">Async</a></li>
  </ul>

  <div class="tab-content">

  <!-- BASICS TAB -->
    <div class="tab-pane active" id="basics">

      <div class="intro-para">
        Download the software and
        discover which tools and libraries you get with the bundle.
        Run two sample apps.
      </div>

      <div class="row">

        <!-- Get Started -->
        <div class="col-md-6">
          <section>
          <h4 class="no-permalink"><a href="get-started/"><img src="images/target.png" height="20" width="20">&nbsp;Get started</a></h4>
            <p>Get Dart. Run two apps.
            </p>
          <img style="border:1px solid black" src="images/simple.png"
               width="300">
          </section>
        </div>

      </div> <!-- end row -->
    </div> <!-- end Get Started tab -->

  <!-- PACKAGES TAB -->
    <div class="tab-pane" id="packages">

      <div class="intro-para">
        Dart developers have been busy creating code libraries that can help you be more productive.
        Leverage that code or put your code out in the world to share with others.
      </div>

      <div class="row">

        <!-- Packages -->
        <div class="col-md-6">
          <section>
          <h4 class="no-permalink"><a href="shared-pkgs/"><img src="images/target.png" height="20" width="20">&nbsp;Install Shared Packages</a></h4>
          <p>Organize and share code at <a href="https://pub.dartlang.org/">pub.dartlang.org</a>.</p>
          <img style="border:1px solid black"
               src="images/pub-dartlang-screenshot.png" width="300">
          </section>
        </div>
        <div class="col-md-6">

        </div>
      </div>
    </div> <!-- end Packages tab -->

  <!-- FUTURES & STREAMS TAB -->
    <div class="tab-pane" id="futures">

      <div class="intro-para">
        The Future and Stream classes provide API for performing tasks,
        such as input/output, asynchronously, so as to avoid blocking your
        program.
        Futures and Streams are fundamental to most Dart programs.
      </div>

      <div class="row">

        <div class="col-md-6">
          <section>
          <h4 class="no-permalink"><a href="futures/"><img src="images/target.png" height="20" width="20">&nbsp;Asynchronous Programming: Futures</a></h4>
          <p>A first look at using Futures for asynchronous tasks.</p>
          <img src="images/futures-code.png">
          </section>
        </div>
          <section>
          <h4 class="no-permalink"><a href="streams/"><img src="images/target.png" height="20" width="20">&nbsp;Asynchronous Programming: Streams</a></h4>
          <p>Use streams to manage sequences of data.</p>
          <img src="images/streams-code.png">
          </section>
        <div class="col-md-6">
        </div>

      </div>
    </div>

    <!-- COMMAND-LINE APPS TAB -->
    <div class="tab-pane" id="commandline">

      <div class="intro-para">
        Dart isn't just for browser-based applications.
        You can write standalone programs, such as servers and scripts, in Dart.
      </div>
    </div>

  </div> <!-- end tab content-->
</div> <!--end tabbable -->
</div> <!-- end of tute-tabs -->
