let evHand = function(e) {
    console.log("you have clicked the heading");
    let xAxis = e.offsetX;
    let yAxis = e.offsetY;
    console.log("you have clicked your mouse on " + xAxis + " And " + yAxis);

}
let ele = document.getElementById("heading");
ele.addEventListener("click", evHand);
