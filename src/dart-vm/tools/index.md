---
reference: "https://www.dartlang.org/dart-vm/articles/"
layout: page
title: "Tools"
description: "xxx."
permalink: /dart-vm/tools/
toc: true
---

When you [download]({{site.dart_vm}}/downloads/) the
[Dart SDK](sdk), you get all the command line tools that you
need to write Dart scripts.

* [`pub`]({{site.dartlang}}/tools/pub/)
: Every Dart app is also a package and the `pub` tool manages
  Dart packages. Pub provides a number of commands for creating,
  installing, updating, and publishing Dart packages.
  Most IDEs that support Dart allow you to run the pub commands through
  the IDE. Some Dart technologies, such as Flutter, may not support
  all of the pub commands.

* [`dart`](dart-vm)
: To manually run the Dart VM, you'll want to use the
  dart command. IDEs that support Dart,
  and some of the `pub` commands, use this
  command behind-the-scenes to execute Dart scripts.
  Note that you must configure your IDE with the location of
  the `dart` binary.

* [`dartanalyzer`](https://github.com/dart-lang/sdk/tree/master/pkg/analyzer_cli#dartanalyzer)
: Dart's static analyzer evaluates and reports any errors or warnings
  in your code.
  The Dart plugin for your IDE should make use of Dart's analysis engine,
  but you can also run it from the command line.

* [`dartfmt`](https://github.com/dart-lang/dart_style#readme)
: Format your code according to the
  [Dart Style Guide]({{site.dartlang}}/guides/effective-dart/style).
  An IDE that supports Dart should allow you to format the code within
  the IDE. Or you can run `dartfmt` from the command line.

In addition, you'll want to download a Dart plugin for your IDE.
See [dartlang tools]({{site.dartlang}}/tools/#ides) for more information.
