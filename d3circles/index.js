var indexCard = d3.select("body").append("svg")
                                 .attr("height", 400)
                                 .attr("width", 600);

var circle1 = indexCard.append("circle")

var clicked = false;

circle1.attr("cx",200)
       .attr("cy",200)
       .attr("r",50)
       .style("fill", "#123456") // can be .attr as well
       .on("click", function(d){

          if (clicked == false) { // if not clicked, do something
            d3.select(this).style("fill", "#654321")
                           .transition()
                           .duration(500)
                           .ease(d3.easeSin)
                           .attr("r", 100);
            clicked = true; // flipping clicked
          }
          else {  // if already clicked, do something else
            d3.select(this).style("fill", "#123456")
                           .transition()
                           .duration(100)
                           .ease(d3.easeCircle)
                           .attr("r", 50);
            clicked = false; // unflipping clicked
          }
        })
      //   .on("mouseover", function(d) {
      //     d3.select(this).style("stroke", "red")
      //  })
      //  .on("mouseout", function(d) {
      //    d3.select(this).style("stroke", "none")
      //  });

// indexCard.append("rect")
//          .attr("x",100)
//          .attr("y",100)
//          .attr("width",20)
//          .attr("height",20)
//
// indexCard.append("line")
//          .attr("x1", 50)
//          .attr("y2", 100)
//          .attr("x2", 300)
//          .attr("y2", 200)
//          .style("stroke", "red")
//          .style("stroke-width", 9)

var circle2 = indexCard.append("circle");

circle2.attr("cx",300)
       .attr("cy",300)
       .attr("r",50)
       .style("fill", "#126456"); // can be .attr as well
