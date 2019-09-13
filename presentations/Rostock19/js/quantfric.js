//// define parameters 
var svg = d3.select("svg#quantfric")
            .on("click", fly);

var width = svg.attr("width"),
    height = svg.attr("height"),
    flydur = 10000;


// data of objects 
var atomDataQF = [{"x": 0, "y": 50, "width": 110, "height": 110}];
var metalDataQF = [{"x": 0, "y": 160, "width": width , "height": 150}];

// atom
var atomQF = svg.selectAll("atom")
              .data(atomDataQF)
              .enter().append("image")
              .attr("x", function(d) { return d.x; })
              .attr("y", function(d) { return d.y; })
              .attr("width", function(d) { return d.width; })
              .attr("height", function(d) { return d.height; })
              .attr("xlink:href", "img/lump1.png")

// material
var metalQF = svg.selectAll("metal")
               .data(metalDataQF)
               .enter()
               .append("rect")
               .attr("x", function(d) { return d.x; })
               .attr("y", function(d) { return d.y; })
               .attr("width", function(d) { return d.width; })
               .attr("height", function(d) { return d.height; })
               .style("opacity", 0.5);

function fly() {
    atomQF.transition()
        .ease(d3.easeLinear)
        .duration(flydur)
        .attr("x", metalDataQF[0].width-atomDataQF[0].width)
        .on('end', function() {
               d3.select(this).transition()
                              .ease(d3.easeLinear)
                              .duration(flydur)
                              .attr("x", 0);
        });
};
