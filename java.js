
var w = 500;
var h = 100;

var svg = d3.select("#Aircraft")
  .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
.data(Aircraft.csv)
.enter()
.append("rect")
.attr("x",0)
.attr("y",0)
.attr("width",20)
.attr("height",100)
.attr("x",function(d,i) {
    return i * (21);
})

//promise statement for Aircraft
var Promise1 = d3.csv("Aircraft.csv");
    
var successFcn=function(Total_Aircraft) {
    console.log(Total_Aircraft);
    initGraph(Total_Aircraft);  
}
var errFcn=function(Total_Aircraft) {
    console.log("failed to get required data")
}
Promise1.then(successFcn,errFcn)
