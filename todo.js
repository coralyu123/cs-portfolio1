var box1 = document.getElementById("box1");
var button = document.getElementById("button");
var inputButton;
var div = document.getElementById("div");
var color = document.getElementById("color");


button.addEventListener("click", function(){
    
    var task = "<div>"+box1.value+"<div>" + "<br>";
    div.innerHTML = div.innerHTML+task; 
    
});

div.addEventListener("click", function(evt){
    
    var thing = evt.target;
    thing.parentNode.removeChild(thing);
    
});


