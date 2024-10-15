let x_circle = Number(prompt("input x for circle: "));
let y_circle = Number(prompt("input y for circle: "));
let r = Number(prompt("input radius for circle"));
let y_upper_line = Number(prompt("input upper border x for horizontal line: "));
let y_lower_line = Number(prompt("input lower border x for horizontal line: "));
let x_point = Number(prompt("input x for point: "));
let y_point = Number(prompt("input y for point: "));
if(y_lower_line > y_upper_line){
    alert("Error: Lower Y is bigger than Upper Y");
}
else{
if(((x_point - x_circle)*(x_point - x_circle) + (y_point - y_circle)*(y_point - y_circle) <= r*r) && (y_point <= y_upper_line && y_point >= y_lower_line)){
    alert("Point IS in the circle and in the line!");
}
else{
    alert("Point IS NOT in the circle and in the line!");
}
}
