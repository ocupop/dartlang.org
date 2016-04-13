---
reference: "https://www.dartlang.org/downloads/windows.html"

layout: page
title: "Installing Dart on Windows"
description: "Installing and updating the Dart SDK on Windows with Chocolatey or an installer."
permalink: /dart-vm/downloads/windows


js:
- url: /js/download-info.js
  defer: true
---

# {{ page.title }}

Don't want to use Chocolatey or a Windows installer?
Another option is [downloading Dart manually](/downloads/archive/).

* [Installing using Chocolatey](#chocolatey)
* [Using a third-party installer](#installer)

## Installing using Chocolatey {#chocolatey}

With [Chocolatey](https://chocolatey.org/),
installing Dart is easy.

The **dart** package contains the [Dart SDK](/tools/sdk/),
which includes the Dart VM, libraries, and command-line Dart tools such as
[dart](/tools/dart-vm/),
[dartanalyzer](https://github.com/dart-lang/sdk/tree/master/pkg/analyzer_cli),
[pub](/tools/pub/),
and [dartdoc](https://github.com/dart-lang/dartdoc#dartdoc).
Optionally, you can add one more tool:

* [Dartium](/tools/dartium/):
  A special build of Chromium that includes a Dart VM.
  Use it to interactively test and debug Dart web apps
  without first compiling them to JavaScript.

For client-side Dart work, you might want to download *both* tools. If you're
working on server-side Dart, all you need is the `dart-sdk`:

{% prettify sh %}
choco install dart-sdk -version <version>
choco install dartium  -version <version>
{% endprettify %}

The current stable version is
<span class="editor-build-rev-stable">[calculating]</span>.

{% comment %}
To choose the dev channel version,
use `-dev<dev-version>`. For example:

{% prettify sh %}
choco install -y dart-sdk -version 1.12.0-dev.2.2
choco install -y dartium  -version 1.12.0-dev.2.2
{% endprettify %}
{% endcomment %}

For more information on Chocolatey support for Dart, see:

* [Dart SDK package](https://chocolatey.org/packages/dart-sdk/)
  on [chocolatey.org](https://chocolatey.org/)
* [Dartium package](https://chocolatey.org/packages/dartium/)
  on [chocolatey.org](https://chocolatey.org/)
* [Blog post](http://divingintodart.blogspot.co.uk/2015/05/chocolatey-dart-packages-for-windows-110.html)
  on [Diving Into Dart](http://divingintodart.blogspot.co.uk/)

## Using a third-party installer {#installer}

A
[Dart SDK installer for Windows](http://www.gekorm.com/dart-windows/)
is available (though unsupported).
You can use the wizard to install stable or dev versions of
the Dart SDK and Dartium.