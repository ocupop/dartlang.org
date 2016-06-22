---
title: Sample code
---

This collection is not exhaustive&mdash;it's just a brief
introduction to the language for people who like to learn by example. You may
also want to check out the following pages.

<div class="card-grid">
  <div class="card">
    <h3><a href="/guides/language/language-tour">Language Tour</a></h3>
    <p>
      Higher text-to-code ratio than here.
    </p>
  </div>
  <div class="card">

    <!-- XXXXX TODO: XXXXX -->

    <h3><a href="/DOES_NOT_EXIST_YET">End-to-end repositories</a></h3>
    <p>For those who like to see projects in their entirety.</p>
  </div>
  <div class="card">
    <h3><a href="/dart-vm/dart-by-example">Cookbook</a></h3>
    <p>
      A set of concrete 'recipes' to get you started with common programming
      tasks.
    </p>
  </div>
</div>

## Hello World

First things first:

{% prettify dart %}
void main() {
  print('Hello, World!');
}
{% endprettify %}

## Variables

We're not explicitly typing the variables here. We could, but type inference works for us.

{% prettify dart %}
var name = "Voyager";
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ["Jupiter", "Saturn", "Uranus", "Neptune"];
var image = {
  "tags": ["saturn"],
  "url": "//path/to/saturn.jpg"
};
{% endprettify %}

## Loops

No surprises here.

{% prettify dart %}
for (var object in flybyObjects) {
  print(object);
}

for (var month = 1; month <= 12; month++) {
  print(month);
}

while (year < 2016) {
  year += 1;
}

do {
  year -= 1;
} while (year > 0);
{% endprettify %}

## Functions

As a best practice, we're specifying the type of the function's argument and return value here. You don't need to do that, though.

{% prettify dart %}
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);
{% endprettify %}

There is a shorthand ('fat arrow') syntax for functions that contain a single statement. This means 'Hello World' can be made [shorter](https://gist.github.com/filiph/8a5e3e845acdafe2ea928fd257a46859) but it's most useful when functions are passed as arguments.

{% prettify dart %}
flybyObjects.where((name) => name.contains("anus")).forEach(print);
{% endprettify %}

## Comments

{% prettify dart %}
// A normal, one-line comment.

/// A dartdoc comment. These are used to document libraries, classes and their
/// members. IDEs and tools use these.

/* Comments like these are also supported. */
{% endprettify %}

## Imports

{% prettify dart %}
// Core libraries.
import 'dart:async';
import 'dart:math';

// Packages.
import 'package:angular2/angular2.dart';

// Files.
import 'path/to/my_other_file.dart';
{% endprettify %}

## Classes

{% prettify dart %}
class Spacecraft {
  String name;
  int year;

  // Constructor, including syntactic sugar for assignment to members.
  Spacecraft(this.name, this.year);

  // Named constructor.
  Spacecraft.fromJson(Map json) {
    name = json['name'];
    year = json['year'];
  }

  // Method.
  String describe() {
    int age = new DateTime.now().year - year;
    return "The spacecraft $name launched in $year, which is $age years ago.";
  }
}
{% endprettify %}

XXX START HERE = [synonyms](/resources/synonyms/)

## Collections

## Strings


...

// String interpolation.
print("The spacecraft ${name.toUpperCase()} left Earth in the year $year.");

## Numbers (math)

## Exceptions

## async/await

## Advanced


### Getters, setters

### toString

### Inheritance, mixins

### Operator overloading
