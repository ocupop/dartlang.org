---
reference: "https://www.dartlang.org/tools/pub/"

layout: page
permalink: /tools/pub/
title: "Pub Package and Asset Manager"
short-title: "Pub"
toc: true
---

{% include breadcrumbs.html %}

# {{ page.title }}

You can use the `pub` tool to manage Dart packages and assets.
Pub also includes commands for creating, developing, and deploying Dart
applications. When you [download]({{site.dart-vm}}/downloads/) the Dart SDK,
one of the tools that you get is `pub`.

<aside class="alert alert-info" markdown="1">
**Hey!**
Want to make your Dart script available from the command line?
You can do this using `pub global activate`. For more information, see
[Running a script from your PATH](cmd/pub-global#running-a-script-from-your-path).
</aside>

You can access the `pub` commands either through an IDE,
such as WebStorm, or at the command line.
Use whatever approach is most convenient.

<aside class="alert alert-info" markdown="1">
**Problems?**
See [Troubleshooting Pub](troubleshoot).
</aside>

## Managing packages

Dart applications rely on packages. If your Dart app uses one or
more library packages, then your app itself must be an
application package.

### How to

* [Getting Started with Pub](get-started)
* [Creating Library Packages](/libraries/create-library-packages)
* [Installing and Configuring Pub](installing)
* [Publishing a Package](publishing)

### Concepts

* [Pub Dependencies](dependencies)
* [Pub Package Layout Conventions](package-layout)
* [Pub Assets and Transformers](assets-and-transformers)
* [Pub Versioning Philosophy](versioning)

### Reference

* [Pubspec Format](pubspec)
* [FAQ](faq)
* [Glossary](glossary)

## Pub commands

The `pub` tool provides commands for a variety of purposes.
One command installs packages, another starts up an HTTP server for testing,
another prepares your app for deployment, and another
publishes your package to [pub.dartlang.org](https://pub.dartlang.org).

For an overview of these commands, see [Pub Commands](cmd/).

The following reference pages cover each command in detail:

* [`pub cache`](cmd/pub-cache)
* [`pub deps`](cmd/pub-deps)
* [`pub downgrade`](cmd/pub-downgrade)
* [`pub get`](cmd/pub-get)
* [`pub global`](cmd/pub-global)
* [`pub publish`](cmd/pub-lish)
* [`pub run`](cmd/pub-run)
* [`pub upgrade`](cmd/pub-upgrade)
* [`pub uploader`](cmd/pub-uploader)

In addition to these commands, there are two pub commands specific
to web development. See [dart4web]({{dart4web}}/tools) for more
information.

## Troubleshooting {#troubleshooting}

[Troubleshooting Pub](troubleshoot) gives solutions to problems that
you might encounter when using pub.
