---
title: "Sample code"
description: "Examples of idiomatic Dart with links to larger examples."
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

[Read more](/guides/language/language-tour#variables) about variables in Dart, including default values, `final` and `const` keywords, and more.

## Control flow statements

No surprises here.

{% prettify dart %}
if (year >= 2001) {
  print("21st century");
} else if (year >= 1901) {
  print("20th century");
}

for (var object in flybyObjects) {
  print(object);
}

for (int month = 1; month <= 12; month++) {
  print(month);
}

while (year < 2016) {
  year += 1;
}
{% endprettify %}

[Read more](/guides/language/language-tour#control-flow-statements) about control flow statements in Dart,
including `break` and `continue`, `switch` and `case`, and `assert`.

## Functions

As a best practice, we're specifying the type of the function's argument and return value here. You don't need to do that, though.

{% prettify dart %}
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);
{% endprettify %}

There is a shorthand ('fat arrow') syntax for functions that contain a single statement.
It's most useful when functions are passed as arguments (but it also means 'Hello World' can be made even [shorter](https://gist.github.com/filiph/8a5e3e845acdafe2ea928fd257a46859) than it already is).

{% prettify dart %}
flybyObjects.where((name) => name.contains("anus")).forEach(print);
{% endprettify %}

Also note that in the example above, the top-level function `print` is provided as an argument.

[Read more](/guides/language/language-tour#functions) about functions in Dart,
including optional parameters, default parameter values, lexical scope, and more.

## Comments

{% prettify dart %}
// A normal, one-line comment.

/// A documentation comment. These are used to document libraries, classes and
/// their members. IDEs and tools use these.

/* Comments like these are also supported. */
{% endprettify %}

[Read more](/guides/language/language-tour#comments) about comments in Dart,
including how the documentation tooling works.

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

[Read more](/guides/language/language-tour#libraries-and-visibility) about libraries and visibility in Dart,
including library prefixes, `show` and `hide`, and lazy loading through the `deferred` keyword.

## Classes

{% prettify dart %}
class Spacecraft {
  String name;
  int year;

  // Constructor, including syntactic sugar for assignment to members.
  Spacecraft(this.name, this.year);

  // Named constructor.
  Spacecraft.unlaunched(this.name) {
    flybyObjects = const [];
  }

  // Method.
  void describe() {
    print("Spacecraft: $name");
    if (year != null) {
      int age = new DateTime.now().year - year;
      print("Launched: $year ($age years ago)");
    } else {
      print("Unlaunched");
    }
  }
}
{% endprettify %}

You would use the class defined above like so:

{% prettify dart %}
var voyager = new Spacecraft("Voyager I", 1977);
voyager.describe();

var voyager3 = new Spacecraft.unlaunched("Voyager III");
voyager3.describe();
{% endprettify %}

[Read more](/guides/language/language-tour#classes) about classes in Dart,
including initializer lists, redirecting constructors, constant constructors, `factory` constructors, getters, setters, and much more.

## Inheritance

Dart has single-inheritance.

{% prettify dart %}
class InterstellarSpacecraft extends Spacecraft
{% endprettify %}

Mixins

# Interfaces

There is no `interface` keyword in Dart. All classes implicitly define an interface.

-- CODE

You can create an abstract method

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


XXX START HERE = [synonyms](/resources/synonyms/)
