//// define parameters 
var svg = d3.select("svg#cylinder");

var width = svg.attr("width"),
    height = svg.attr("height");

// atom
var atomCyl = svg.append("image")
              .attr("x", 30)
              .attr("y", 110)
              .attr("width", 110)
              .attr("height", 110)
              .attr("xlink:href", "img/atom.png");

// material
var metalCyl = svg.append("rect")
               .attr("x", 280)
               .attr("y", 110)
               .attr("width", width-280-50)
               .attr("height", 100)
               .style("opacity", 0.5);

// cylinder
var ellipse1 = svg.append("ellipse")
                  .attr("cx", 280)
                  .attr("cy", 160)
                  .attr("rx", 40)
                  .attr("ry", 50)
                  .attr("fill", d3.rgb("#C0C0C0"));

var ellipse2 = svg.append("ellipse")
                  .attr("cx", 280)
                  .attr("cy", 160)
                  .attr("rx", 30)
                  .attr("ry", 40)
                  .attr("fill", d3.rgb("#D3D3D3"));

// cylinder
var ellipse3 = svg.append("ellipse")
                  .attr("cx", width-50)
                  .attr("cy", 160)
                  .attr("rx", 40)
                  .attr("ry", 50)
                  .attr("fill", d3.rgb("#808080"));


 // lines
var arrow = svg.append("svg#plate:defs").append("svg#plate:marker")
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
