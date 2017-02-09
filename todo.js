var color = document.getElementById("color");
var highlight = document.getElementById("highlight");
var box1 = document.getElementById("box1");
var button = document.getElementById("button");
var list = document.getElementById("div");

button.addEventListener("click", function() {
    
    
    var task = "<div style = 'color: " + color.value + "; background-color:" + highlight.value + " '>" + box1.value + "<br>";
    list.innerHTML = list.innerHTML + task;
    
});

list.addEventListener("click", function(evt){
   
   var remove = evt.target;
   remove.parentNode.removeChild(remove);
   
});