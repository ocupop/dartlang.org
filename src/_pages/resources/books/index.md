---
reference: "https://www.dartlang.org/books/"

layout: page
permalink: /resources/books
title: Books about Dart
description: Read all about it! Here's a collection of books about Dart.
---

# Books on Dart

Here's a collection of books about Dart.
[Let us know](https://github.com/dart-lang/www.dartlang.org/issues)
if you find another book that we should add.

{% comment %}
{% injectdata books resources/books/books.yaml %}
{% endcomment %}

{% for book in site.data.books %}
<div class="book row">
  <div class="col-md-3">
    <a href="{{ book.link }}" class="btn"><img src="covers/{{ book.cover }}" class="cover"></a>
  </div>
  <div class="col-md-9">
    <h3 class="title"><a href="{{ book.link }}">{{ book.title }}</a></h3>
    <h4 class="authors">Written by {{ book.authors || array_to_sentence_string }}</h4>
    <p>{{ book.desc }}</p>
  </div>
</div>
{% endfor %}
