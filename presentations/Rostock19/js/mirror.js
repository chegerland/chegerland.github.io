// define parameters 
var svg = d3.select("svg#mirror")
            .on("click", fly);

var width = svg.attr("width"),
    height = svg.attr("height"),
    flydur = 10000;


// data of objects 
var atomDataMirr = [{"x": 0, "y": 50, "width": 110, "height": 110}];
var mirroratomDataMirr = [{"x": 0, "y": 180, "width": 110, "height": 110}];
var metalDataMirr = [{"x": 0, "y": 160, "width": width , "height": 150}];

// atom
var atom2 = svg.selectAll("atom")
              .data(atomDataMirr)
              .enter().append("image")
              .attr("x", function(d) { return d.x; })
              .attr("y", function(d) { return d.y; })
              .attr("width", function(d) { return d.width; })
              .attr("height", function(d) { return d.height; })
              .attr("xlink:href", "img/lump1.png")

// atom
var mirroratom = svg.selectAll("mirroratom")
              .data(mirroratomDataMirr)
              .enter().append("image")
              .attr("x", function(d) { return d.x; })
              .attr("y", function(d) { return d.y; })
              .attr("width", function(d) { return d.width; })
              .attr("height", function(d) { return d.height; })
              .style("opacity", 0.5)
              .attr("xlink:href", "img/lump2.png")

// material
var metal2 = svg.selectAll("metal")
               .data(metalDataMirr)
               .enter()
               .append("rect")
               .attr("x", function(d) { return d.x; })
               .attr("y", function(d) { return d.y; })
               .attr("width", function(d) { return d.width; })
               .attr("height", function(d) { return d.height; })
               .style("opacity", 0.5);

// lines
var conline = svg.append("line")
                 .attr("x1", 255)
                 .attr("y1", 100)
                 .attr("x2", 430)
                 .attr("y2", 230)
                 .attr("stroke-width", 3)
                 .attr("marker-end", "url(#triangle)");

var conarrow = svg.append("svg#mirror:defs").append("svg#mirror:marker")
               .attr("id", "triangle")
               .attr("refX", 0)
               .attr("refY", 0)
               .attr("markerWidth", 5)
               .attr("markerHeight", 5)
               .attr("markerUnits", "strokeWidth")
               .attr("orient", "auto")
               .attr("viewBox", "-5 -5 10 10")
               .style("fill", "black")
               .append("path");

var qfline = svg.append("line")
                .attr("x1", 255)
                .attr("y1", 100)
                .attr("x2", 430)
                .attr("y2", 100)
                .attr("stroke-width", 3)
                .attr("marker-end", "url(#triangle)");

var cpline = svg.append("line")
                .attr("x1", 255)
                .attr("y1", 100)
                .attr("x2", 255)
                .attr("y2", 230)
                .attr("stroke-width", 3)
                .attr("marker-end", "url(#triangle)");



function fly() {
    atom2.transition()
        .ease(d3.easeLinear)
        .duration(flydur)
        .attr("x", metalDataMirr[0].width-atomDataMirr[0].width)
        .on('end', function() {
               d3.select(this).transition()
                              .ease(d3.easeLinear)
                              .duration(flydur/4)
                              .attr("x", 200);
        });
    
    mirroratom.transition()
              .delay(flydur/10)
              .ease(d3.easeLinear)
              .duration(flydur)
              .attr("x", metalDataMirr[0].width-atomDataMirr[0].width)
              .on('end', function() {
                     d3.select(this).transition()
                                    .ease(d3.easeLinear)
                                    .duration(flydur/4)
                                    .attr("x", 380);
              });
   
    conarrow.transition()
         .delay(flydur*1.6)
         .attr("d", "M 0,0 m -5,-5 L 5,0 L -5,5 Z");

    conline.transition()
           .delay(flydur*1.6)
           .attr("stroke", "black"); 

    qfline.transition()
          .delay(flydur*1.6)
          .attr("stroke", "black"); 

    cpline.transition()
          .delay(flydur*1.6)
          .attr("stroke", "black"); 
};

