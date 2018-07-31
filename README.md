# SlideIt-V2-
MES slider plugin

Checkout the demo: http://jsfiddle.net/wxb7rk16/

<h2>Starting out:</h2>
<ul>
  <li>Download js file and include it in your project</li>
</ul>

<h2>How to use:</h2>

```
// SLIDER
$('#home-slider').fadeIn(500, function() {
  $(this).slideIt({
    parent: '#home-slider', // parent ul of li's
    slides: '#home-slider li', // slides
    speed: 4000, // how fast slides change
    textDelay: 1000 // how fast blurb text should fade in
  });
});
```
