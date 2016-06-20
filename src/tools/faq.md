---
layout: default
permalink: /tools/faq
title: "Tools FAQ"
short-title: "FAQ"
description: "FAQ and other tips for using Dart Tools."
---

{% comment %}
This needs updating...
{% endcomment %}

I am having trouble running the Linux distribution of Dart on my Linux platform.
: Some flavors of Linux require that you manually build the Dart SDK.
  This may require that you update to a more recent version of
  the GCC library.
  The following resources may be useful:

  * [Building Dart on CentOS, Red Hat, Fedora and Amazon Linux AMI](https://github.com/dart-lang/sdk/wiki/Building-Dart-on-CentOS,-Red-Hat,-Fedora-and-Amazon-Linux-AMI)
  * [Building Dart SDK on Ubuntu 10.04 Server](https://github.com/dart-lang/sdk/wiki/Building-Dart-SDK-on-Ubuntu-10.04-Server)


Can all Dart files be put into a source code repository?
: Dart tools generate some files that should be local only.
  The [What Not to Commit](/guides/libraries/private-files) page
  has some advice on what not to put into your source repo.


