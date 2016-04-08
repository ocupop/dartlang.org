---
reference: "https://www.dartlang.org/tools/"

layout: page
permalink: /tools/
title: "Dart Tools"
description: "The tools that support the Dart language."
toc: true
---

# {{ page.title }}

A variety of tools are available for Dart development.
This page discusses tools common to various Dart technologies.
See the Tools page for your particular technology for detailed information.

<h2>DartPad</h2>

When first learning the language, [DartPad](dartpad) is
a great way to learn Dart syntax or experiment with Dart language features.
Once you are ready to write code that imports other packages,
you'll need to download an SDK.

## IDE

You can find a Dart plugin for the most commonly used IDEs.
If you don't already have a favorite IDE,
we recommend WebStorm, which comes with Dart Support.

<img src="images/webstorm.png" alt="WebStorm logo">
<a href="{{site.dart4web}}/tools/webstorm"><b>WebStorm</b></a>

<img src="images/IntellIJ-IDEA.png" alt="IntelliJ logo">
<a href="jetbrains-plugin"><b>IntelliJ IDEA<br>
(and other JetBrain IDEs)</b></a>

The Dart plugins for the following tools are unsupported
and available as open source.

<img src="images/sublime.png" alt="Sublime logo">
<a href="https://github.com/dart-lang/dart-sublime-bundle#readme"><b>Sublime Text 3</b></a>

<img src="images/emacs.png" alt="Emacs logo">
<a href="https://github.com/nex3/dart-mode"><b>Emacs</b></a>

<img src="images/vim.png" alt="Vim logo">
<a href="https://github.com/dart-lang/dart-vim-plugin"><b>Vim</b></a>

<img src="images/atom-logo.png" alt="Atom logo">
<a href="https://github.com/dart-atom/dartlang/"><b>Atom</b></a>

## SDK

Each Dart technology has its own SDK.
If you are developing for the web, or writing Dart scripts or servers,
you'll want to download the [standalone Dart VM]({{site.dart-vm}}/downloads/).
If you are developing for mobile, see
[Flutter Setup]({{site.flutter}}/setup).

The SDK includes various tools you'll need, such as a static
analyzer, and a code formatter.  Refer to the site for your Dart
technology for information on what tools are included and how to use them.

## Command-line tools

One tool that you'll use for Dart development is the `pub` tool.
Pub, Dart's package manager, provides a number of commands for
creating, installing, updating, and publishing Dart packages.

See the [pub](pub) documentation for more information.
