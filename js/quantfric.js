// define parameters 
var svg = d3.select("svg"),
    width = svg.attr("width"),
    height = svg.attr("height"),
    dragdur = 80,
    material = true;

// data of objects 
var atomData = [{"x": 50, "y": 50, "width": 70, "height": 70}];
var mirroratomData = [{"x": 50, "y": 160, "width": atomData[0].width, "height": atomData[0].height, "opacity": 0.5}];
var metalData = [{"x": 0, "y": 150, "width": +svg.attr("width") , "height": 90}];
var fricData = [{"x1": atomData[0].x+0.5*atomData[0].width, "y1": atomData[0].y+0.5*atomData[0].height, "x2": mirroratomData[0].x+0.5*mirroratomData[0].width , "y2": mirroratomData[0].y+0.5*mirroratomData[0].height}];

// atom
var atom = svg.selectAll("atom")
              .data(atomData)
              .enter().append("image")
              .attr("x", function(d) { return d.x; })
              .attr("y", function(d) { return d.y; })
              .attr("width", function(d) { return d.width; })
              .attr("height", function(d) { return d.height; })
              .attr("xlink:href", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/U%2B269B.svg/180px-U%2B269B.svg.png")
              .call(d3.drag()
                      .on("drag", dragged));

// mirroratom
var mirroratom = svg.selectAll("mirroratom")
                  .data(mirroratomData)
                  .enter().append("image")
                  .attr("x", function(d) { return d.x; })
                  .attr("y", function(d) { return d.y; })
                  .attr("width", function(d) { return d.width; })
                  .attr("height", function(d) { return d.height; })
                  .style("opacity", function(d) { return d.opacity; })
                  .attr("xlink:href", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/U%2B269B.svg/180px-U%2B269B.svg.png");

// material
var metal = svg.selectAll("metal")
               .data(metalData)
               .enter()
               .append("rect")
               .attr("x", function(d) { return d.x; })
               .attr("y", function(d) { return d.y; })
               .attr("width", function(d) { return d.width; })
               .attr("height", function(d) { return d.height; })
               .style("opacity", 0.5);

// force vector
var fric = svg.selectAll("fric")
              .data(fricData)
              .enter().append("line")
              .attr("x1", function(d) { return d.x1; })
              .attr("x2", function(d) { return d.x2; })
              .attr("y1", function(d) { return d.y1; })
              .attr("y2", function(d) { return d.y2; })
              .attr("stroke-width", 2)
              .attr("stroke", "black");


// function for dragging
function dragged(d) {
    
    // drag but be careful at edges
    d3.select(this).attr("x", function(d){
        d.x = d3.event.x; 
        if (d.x < 0) d.x = 0;
        if (d.x > svg.attr("width")-atomData[0].width) d.x = svg.attr("width")-atomData[0].width;
        return d.x;
    });

    // change duration of transition depending if material is switched on
    // I don't know of a better solution, so that's quick and dirty i guess
    if (material) {
        drag = dragdur; 
    } else {
        drag = 0;
    }
   
    // drag mirratom  
    mirroratom.transition()
              .duration(drag)
              .ease(d3.easeLinear)
              .attr("x", function(d) {
                d.x = d3.event.x; 
                if (d.x < 0) d.x = 0;
                if (d.x > svg.attr("width")-mirroratomData[0].width) d.x = svg.attr("width")-mirroratomData[0].width;
                return d.x; });

    // drag force vector
    fric.transition()
        .duration(0)
        .attr("x1", function(d) {
            d.x = d3.event.x + 0.5*atomData[0].width;
            if (d.x < 0.5*atomData[0].width) d.x = 0.5*atomData[0].width;
            if (d.x > svg.attr("width")-0.5*atomData[0].width) d.x = svg.attr("width")-0.5*atomData[0].width;
            return d.x; })
        .transition()
        .duration(drag)
        .ease(d3.easeLinear)
        .attr("x2", function(d) {
            d.x = d3.event.x + 0.5*mirroratomData[0].width;
            if (d.x < 0.5*mirroratomData[0].width) d.x = 0.5*mirroratomData[0].width;
            if (d.x > svg.attr("width")-0.5*mirroratomData[0].width) d.x = svg.attr("width")-0.5*mirroratomData[0].width;
            return d.x });

}

// switch material response on/off
function matswitch() {
    if (material) {
        material = false;
        metal.style("opacity", 0.1);
    } else {
        material = true;
        metal.style("opacity", 0.5);

    }
}
