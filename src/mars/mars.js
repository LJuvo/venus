import * as d3 from "d3";

let mars = () => {};
let containerWidth, containerHeight, marSvg;

let Init = (id, devState) => {
    containerWidth = document.getElementById(id).offsetWidth;
    containerHeight = document.getElementById(id).offsetHeight;

    marSvg = d3
        .select("#" + id)
        .append("svg")
        .attr("width", containerWidth)
        .attr("height", containerHeight);

    if (devState) createDevRect();
};

let createDevRect = () => {
    let rect = marSvg.append("g");
    rect
        .append("rect")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 50)
        .attr("height", 50)
        .attr("fill", "#ff0000")
        .attr("stroke", "#00ff00");
};

mars.prototype.APP = (id, devState) => {
    Init(id, devState);
};

export default mars;