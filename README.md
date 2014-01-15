
## jQuery tidyParallax plugin

Plugin for creating parallax patterns in website sections.

### Usage:

$("header.primary, footer.primary").tidyParallax();

### Example:

<html>
  <head>
    <title>tidyParallax Example</title>
    <style>
      header.primary {
        position: fixed;
      }
      header.primary, footer.primary {
        background-image: url( link to your pattern );
        background-repeat: repeat;
        background-attachment: scroll;
      }
    </style>
  </head>
  <body>
    <header class="primary">
      <h1>Lorem Ipsum</h1>
    </header>
    <footer class="primary">
      <p>&copy; 2014 irishmiss.com</p>
    </footer>
    <script type="application/javascript">
    $(document).ready( function() {
      $("header.primary, footer.primary").tidyParallax();
    });
    </script>
  </body>
</html>

### License

* This theme is available under [CC-BY 3.0](http://creativecommons.org/licenses/by/3.0/)

* Font Awesome is available under [SIL OFL 1.1](http://scripts.sil.org/OFL)
