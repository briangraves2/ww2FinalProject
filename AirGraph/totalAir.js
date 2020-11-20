
var initGraph = function(data) {
 var screen = {width:500,height:400};
var margins ={top:15,bottom:50,left:50,right:30}
var graph = {width:screen.width - margins.left - margins.right, height: screen.height - margins.top - margins.bottom}; 
var w = 500;
var h = 100;
 var barPadding=1;
    
var svg = d3.select("#Aircraft")
.append("svg")
.attr("width", w)
.attr("height", h);
d3.select("#Aircraft svg")    
.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("fill","green")
.attr("x",function(d, i){
    return i * 21})
.attr("y",0)
.attr("width", 10)
.attr("height",function(d){
    return parseInt(d.Total_Aircraft);
}); 
}

var dataset = d3.csv("AirGraph/Aircraft.csv");
var successFcn=function(data){
console.log(data);
initGraph(data); 
}
var errFcn=function(errormessage){
    console.log(errormessage)
}
dataset.then(successFcn,errFcn)