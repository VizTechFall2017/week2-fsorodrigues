// defining the data
var solarSystem = [
    { "type": "ring", "name": "ring1", "radius": 16.209, "color": "darkblue", "distance": 1427.0 },
    { "type": "ring", "name": "ring2", "radius": 14.209, "color": "darkblue", "distance": 1427.0 },
    { "type": "ring", "name": "ring3", "radius": 13.209, "color": "darkblue", "distance": 1427.0 },
    { "type": "ring", "name": "ring4", "radius": 11.209, "color": "darkblue", "distance": 1427.0 },
    { "type": "star", "name": "Sun", "radius": 109.1912, "color": "yellow", "distance": 0 },
    { "type": "planet", "name": "Mercury", "radius": 0.3829, "color": "orange", "distance": 57.9 },
    { "type": "planet", "name": "Venus", "radius": 0.9499, "color": "lightblue", "distance": 108.2},
    { "type": "planet", "name": "Earth", "radius": 1, "color": "blue", "distance": 149.6 },
    { "type": "planet", "name": "Mars", "radius": 0.533, "color": "red", "distance": 227.9 },
    { "type": "planet", "name": "Jupiter", "radius": 11.209, "color": "brown", "distance": 778.3 },
    { "type": "planet", "name": "Saturn", "radius": 9.4492, "color": "magenta", "distance": 1427.0 },
    { "type": "planet", "name": "Uranus", "radius": 4.007, "color": "cyan", "distance": 2871.0 },
    { "type": "planet", "name": "Neptune", "radius": 3.883, "color": "darkblue", "distance": 4497.1 }
];


// creating array with solarSystem.distance data for width
var distances =  d3.nest().key(function(d) { return d.distance; })
                          .entries(solarSystem);

distances.forEach(function(d) {
            d.key = +d.key;
});

// setting up variables for proportionality
var radiusSun = solarSystem[4].radius;
var factor = 7;

var height = 700;
var width = Math.ceil(distances[(distances.length - 1)].key + (factor * radiusSun));
var margin = {top: 50, right: 30, bottom: 30, left: 50}

// parsing data for numeric outputs
solarSystem.forEach(function(d) {
            d.radius = +d.radius;
            d.distance = +d.distance;
});

// appending svg element to container
var svgCanvas = d3.select(".svg-container").append("svg")
                                 .attr("height", height + margin.top + margin.bottom)
                                 .attr("width", width + margin.right + margin.left)
                                 .style("background-color", "#101413");

var circles = svgCanvas.selectAll("circle")
                       .data(solarSystem) // pointing to data
                       .enter() // pointing to data
                       .append("circle") // appending circles
                       .attr("class", function(d) { return d.type }) // setting up classes for circles
                       .attr("id", function(d) { return d.name }) // setting up ids for circles
                       .attr("cx", function(d) {
                                                 if (d.type == "star" ) { // cx for is origin
                                                 return d.distance
                                               } else {
                                                 return (factor * radiusSun) + d.distance // setting up distance from edge of [0]
                                               }
                                                  })
                       .attr("cy", (height + margin.top + margin.bottom)/2) // setting circles to middle
                       .attr("r", function(d) { return factor * d.radius }) // setting up proportional radiuses
                       .attr("opacity", function(d) {
                                                 if (d.type == "ring" ) {
                                                 return 0
                                               } else {
                                                 return 1
                                               }
                                             });

var toggleSaturn = d3.select("#Saturn")
                     .on("mouseover", function(d) {
                       d3.selectAll(".ring").transition().duration(500).ease(d3.easeSin).attr("opacity", .45);
                     })
                     .on("mouseout", function(d) {
                       d3.selectAll(".ring").transition().duration(300).ease(d3.easeCircle).attr("opacity", 0);
                     });

$.jInvertScroll([".svg-container"]); // jQuery scroll inverter script -- also requires CSS
