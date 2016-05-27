---
layout: default
permalink: /resources/dart-tips/
title: "Dart Tips: Short Video Tutorials about Dart"
description: "Super short video intros to Dart language and library features."
---

Sometimes, you only have 5 minutes. Watch super short introductions to
Dart language and library topics.

{% for episode in site.data.episodes %}
{% capture link %}dart-tips-ep-{{episode.num}}.html{% endcapture %}
<div class="row">
  <div class="col-sm-2">
    <div class="content">
      <a href="{{ link }}">
        <img style="margin-top:25px; box-shadow: 5px 5px 10px #CCC;" src="{{episode.thumbnail}}">
      </a>
    </div>
  </div>
  <div class="col-sm-10">
    <div class="content">
      <h3><a href="{{ link }}">Ep. {{ episode.num }}: {{ episode.subtitle }}</a></h3>
      <p>{{ episode.description }}</p>
      <p>{{ episode.pubdate }}</p>
    </div>
  </div>
</div>
{% endfor %}

<a href="http://marakana.com"><img src="{% asset_path 'dart-tips/marakana-logo.png' %}" alt="Marakana Logo"></a>
Our thanks go out to [Marakana](http://www.marakana.com) for producing this
video series.
