var height = 300;
var width = 5000;
var margin = {top: 50, right: 30, bottom: 30, left: 50}
var solarSystem = [
    { "name": "Sun", "radius": 91.6788, "color": "yellow", "distance": 0 },
    { "name": "Mercury", "radius": 0.3829, "color": "orange", "distance": 57.9 },
    { "name": "Venus", "radius": 0.9499, "color": "lightblue", "distance": 108.2},
    { "name": "Earth", "radius": 1, "color": "blue", "distance": 149.6 },
    { "name": "Mars", "radius": 0.533, "color": "red", "distance": 227.9 },
    { "name": "Jupiter", "radius": 11.209, "color": "brown", "distance": 778.3 },
    { "name": "Saturn", "radius": 9.4492, "color": "magenta", "distance": 1427.0 },
    { "name": "Uranus", "radius": 4.007, "color": "cyan", "distance": 2871.0 },
    { "name": "Neptune", "radius": 3.883, "color": "darkblue", "distance": 4497.1 }
];

solarSystem.forEach(function(d) {
            d.radius = +d.radius;
            d.distance = +d.distance;
});

var svgCanvas = d3.select(".svg-container").append("svg")
                                 .attr("height", height + margin.top + margin.bottom)
                                 .attr("width", width + margin.right + margin.left)
                                 .style("background-color", "#101413");

var circles = svgCanvas.selectAll("circle")
                       .data(solarSystem)
                       .enter()
                       .append("circle")
                       .attr("cx", function(d,i) { if (d.name == "Sun") {
                                                 return d.distance - 4.75 * d.radius
                                               } else {
                                                 return d.distance + 20
                                               }

                                                  })
                       .attr("cy", (height + margin.top + margin.bottom)/2)
                       .attr("r", function(d) {
                                                if (d.name == "Sun") {
                                                  return 5 * d.radius
                                                } else {
                                                  return 6.5 * d.radius
                                                }
                                              })
                       .style("fill", function(d) { return d.color })
                       .attr("id", function(d) { return d.name });

$.jInvertScroll([".svg-container"]);
