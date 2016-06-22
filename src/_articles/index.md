---
layout: default
title: "Articles"
description: "Read about the Dart language and tools with this collection of articles, style guides, and more."
---
<p class="lead">Read these articles for insight into the Dart language and its libraries.</p>

Read these articles for insight into
the Dart language and libraries.

Also see:

* [Effective Dart](/guides/language/effective-dart/)
* [Tutorials](/tutorials/)
* [Articles about the Dart VM](/articles/dart-vm/)
* [Articles about Dart for the web]({{site.dart4web}}/articles/)

<div class="break-80">
  <h2>Language Details</h2>
  {% assign articles = site.articles | filter: 'language' | order: 'date' | reverse %}
  <ul class="nav-list">
    {% for article in articles %}
      <li>{% include article_summary.html %}</li>
    {% endfor %}
  </ul>
</div>

<div class="break-80">
  <h2>Libraries and APIs</h2>
  {% assign articles = site.articles | filter: 'libraries' | order: 'date' | reverse %}
  <ul class="nav-list">
    {% for article in articles %}
      <li>{% include article_summary.html %}</li>
    {% endfor %}
  </ul>
</div>

<div class="break-80">
  <h2>Design Decisions</h2>
  {% assign articles = site.articles | filter: 'design-decisions' | order: 'date' | reverse %}
  <ul class="nav-list">
    {% for article in articles %}
      <li>{% include article_summary.html %}</li>
    {% endfor %}
  </ul>
</div>
