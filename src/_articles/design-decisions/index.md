---
layout: default
title: "Articles: Design Decisions"
toc: false
---

Read these articles for insight into why Dart was designed to work the way it works.

<div class="break-80">
  {% assign articles = site.articles | filter: 'design-decisions' | order: 'date' | reverse %}
  <ul class="nav-list">
    {% for article in articles %}
      <li>{% include article_summary.html %}</li>
    {% endfor %}
  </ul>
</div>
