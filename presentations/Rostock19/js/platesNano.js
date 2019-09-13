//// define parameters 
var svg = d3.select("svg#platesNano");

var width = svg.attr("width"),
    height = svg.attr("height");


// data of objects 
var metalData1 = [{"x": 0, "y": 0, "width": width , "height": 100}];
var atomData = [{"x": 30, "y": 110, "width": 110, "height": 110}];
var metalData2 = [{"x": 0, "y": 210, "width": width , "height": 100}];

// atom
var atom4 = svg.selectAll("atom")
              .data(atomData)
              .enter().append("image")
              .attr("x", function(d) { return d.x; })
              .attr("y", function(d) { return d.y; })
              .attr("width", function(d) { return d.width; })
              .attr("height", function(d) { return d.height; })
              .attr("xlink:href", "img/lump1.png")

// material
var metal4 = svg.selectAll("metal")
               .data(metalData1)
               .enter()
               .append("rect")
               .attr("x", function(d) { return d.x; })
               .attr("y", function(d) { return d.y; })
               .attr("width", function(d) { return d.width; })
               .attr("height", function(d) { return d.height; })
               .style("opacity", 0.5);

var metal5 = svg.selectAll("metal")
               .data(metalData2)
               .enter()
               .append("rect")
               .attr("x", function(d) { return d.x; })
               .attr("y", function(d) { return d.y; })
               .attr("width", function(d) { return d.width; })
               .attr("height", function(d) { return d.height; })
               .style("opacity", 0.5);

var arrow = svg.append("svg#plates:defs").append("svg#plates:marker")
               .attr("id", "blacktriangle")
               .attr("refX", 0)
               .attr("refY", 0)
               .attr("markerWidth", 5)
               .attr("markerHeight", 5)
               .attr("markerUnits", "strokeWidth")
               .attr("orient", "auto")
               .attr("viewBox", "-5 -5 10 10")
               .style("fill", "black")
               .append("path")
               .attr("d", "M 0,0 m -5,-5 L 5,0 L -5,5 Z");

var arrowline = svg.append("line")
              .attr("x1", 150)
              .attr("y1", 155)
              .attr("x2", 220)
              .attr("y2", 155)
              .attr("stroke-width", 3)
              .attr("marker-end", "url(#blacktriangle)")
              .attr("stroke", "black");
