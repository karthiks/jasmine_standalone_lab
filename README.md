# Jasmine Standalone 

This is basically the **Jasmine Standalone Release** 

It includes:

* [Jasmine 1.1.0](https://github.com/pivotal/jasmine/downloads);

## Writing a new spec

When creating a new module and its corresponding spec file, remember it all in the SpecRunner.html like below:

Example:

```html
  <!-- include source files here... -->
  <script src="src/helloWorld.js"></script>

  <!-- include spec files here... -->
  <script src="spec/helloWorld_spec.js"></script>

```

## The SpecRunner

The Javascript code that launches and executes the specs/tests resides in the specRunner.html, within the ```<script>``` tags as below:

```html
<script type="text/javascript">
    (function() {
      var jasmineEnv = jasmine.getEnv();
      jasmineEnv.updateInterval = 1000;

      var trivialReporter = new jasmine.TrivialReporter();

      jasmineEnv.addReporter(trivialReporter);

      jasmineEnv.specFilter = function(spec) {
        return trivialReporter.specFilter(spec);
      };

      var currentWindowOnload = window.onload;

      window.onload = function() {
        if (currentWindowOnload) {
          currentWindowOnload();
        }
        execJasmine();
      };

      function execJasmine() {
        jasmineEnv.execute();
      }

    })();
  </script>
```
## Put together by

[Karthik Sirasanagandla](https://github.com/karthiks)

## My hearty thanks goes to the ones I'm inspired by.

Made with great inspiration from
* [Jasmine Standalone RequireJS](https://github.com/pirelenito/jasmine-standalone-requirejs) by [Paulo Ragonha](https://github.com/pirelenito)
* [Testing Backbone + RequireJS Applications with Jasmine](http://kilon.org/blog/2012/08/testing-backbone-requirejs-applications-with-jasmine/) by [Uzi Kilon](https://github.com/uzikilon).
