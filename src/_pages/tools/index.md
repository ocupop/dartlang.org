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

## DartPad

When first learning the language, [DartPad](dartpad) is
a great way to learn Dart syntax or experiment with Dart language features.
Once you are ready to write code that imports other packages,
you'll need to download an SDK.

## IDEs

You can find a Dart plugin for the most commonly used IDEs.
If you don't already have a favorite IDE,
we recommend WebStorm, which comes with Dart Support.

<img src="{% asset_path 'tools/webstorm.png' %}" alt="WebStorm logo">
<a href="{{site.dart4web}}/tools/webstorm"><b>WebStorm</b></a>

<img src="{% asset_path 'tools/IntellIJ-IDEA.png' %}" alt="IntelliJ logo">
<a href="jetbrains-plugin"><b>IntelliJ IDEA<br>
(and other JetBrain IDEs)</b></a>

The Dart plugins for the following tools are unsupported
and available as open source.

<img src="{% asset_path 'tools/sublime.png' %}" alt="Sublime logo">
<a href="https://github.com/dart-lang/dart-sublime-bundle#readme"><b>Sublime Text 3</b></a>

<img src="{% asset_path 'tools/emacs.png' %}" alt="Emacs logo">
<a href="https://github.com/nex3/dart-mode"><b>Emacs</b></a>

<img src="{% asset_path 'tools/vim.png' %}" alt="Vim logo">
<a href="https://github.com/dart-lang/dart-vim-plugin"><b>Vim</b></a>

<img src="{% asset_path 'tools/atom-logo.png' %}" alt="Atom logo">
<a href="https://github.com/dart-atom/dartlang/"><b>Atom</b></a>

## SDK

Each Dart technology has its own SDK.
If you are developing for the web, or writing Dart scripts or servers,
you'll want to download the [standalone Dart VM]({{site.dart_vm}}/downloads/).
If you are developing for mobile, see
[Flutter Setup]({{site.flutter}}/setup).

The SDK includes various tools you'll need, such as a static
analyzer, and a code formatter.  Refer to the site for your Dart
technology for information on what tools are included and how to use them.

## Command-line tools

This is a brief introduction to the most common Dart tools you might see.
Some of these tools might have slightly different names depending on
the Dart technology you are using, or they might not use the full
functionality described in these docs.
Consult the tools page for your technology for further details.

* [pub](/tools/pub/)
: Every Dart app is also a package and the `pub` tool manages
  Dart packages. Pub provides a number of commands for creating,
  installing, updating, and publishing Dart packages.
  Most IDEs that support Dart allow you to run the pub commands through
  the IDE. Some Dart technologies, such as Flutter, may not support
  all of the pub commands.
  See the [pub](pub) documentation to learn how pub works.

* [dart]({{site.dart_vm}}/tools/dart-vm)
: To manually run the Dart VM, you'll want to use the
  [dart]({{site.dart_vm}}/tools/dart-vm) command.
  IDEs that support Dart,
  and some of the `pub` commands, use this
  command behind-the-scenes to execute Dart scripts.
  Note that you must configure your IDE with the location of
  the `dart` binary.

* static analyzer
: Dart's static analyzer evaluates and reports any errors or warnings
  in your code.
  The Dart plugin for your IDE should make use of Dart's analysis engine,
  but you can also run it from the command line. See the
  [dartanalyzer](https://github.com/dart-lang/sdk/tree/master/pkg/analyzer_cli#dartanalyzer)
  docs for information on how to manually run the static analyzer for
  the Dart VM.

* code formatter
: Format your code according to the
  [Dart Style Guide](/guides/effective-dart/style).
  An IDE that supports Dart should allow you to format the code within
  the IDE. Or you can run the formatter from the command line.
  See [dartfmt](https://github.com/dart-lang/dart_style#readme)
  to learn how to manually run the code formatter for the Dart VM.

Also see the tools documentation for your Dart technology.
[Dart VM]({{site.dart_vm}}/tools/) |
[Flutter]({{site.flutter}}/setup/)
