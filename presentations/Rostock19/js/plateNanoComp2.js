//// define parameters 
var svg = d3.select("svg#plateNanoComp2");

var width = svg.attr("width"),
    height = svg.attr("height");


// data of objects 
var atomDataP1 = [{"x": 140, "y": 110, "width": 100, "height": 100}];
var metalDataP1 = [{"x": 0, "y": 210, "width": width , "height": 100}];

// atom
var atom3 = svg.selectAll("atom")
              .data(atomDataP1)
              .enter().append("image")
              .attr("x", function(d) { return d.x; })
              .attr("y", function(d) { return d.y; })
              .attr("width", function(d) { return d.width; })
              .attr("height", function(d) { return d.height; })
              .attr("xlink:href", "img/lump1.png")

// material
var metal3 = svg.selectAll("metal")
               .data(metalDataP1)
               .enter()
               .append("rect")
               .attr("x", function(d) { return d.x; })
               .attr("y", function(d) { return d.y; })
               .attr("width", function(d) { return d.width; })
               .attr("height", function(d) { return d.height; })
               .style("opacity", 0.5);
