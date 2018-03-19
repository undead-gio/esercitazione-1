var banana = document.getElementById("banana");
document.addEventListener("mousemove", getMouse); 


banana.style.position = "absolute"; //css		
var banpos = {x:0, y:0};

setInterval(followMouse, 50);

var mouse = {x:0, y:0}; //mouse.x, mouse.y

var dir = "right";
function getMouse(e){
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}

function followMouse(){
    //1. find distance X , distance Y
    var distX = mouse.x - banpos.x;
    var distY = mouse.y - banpos.y;
    //Easing motion
//Progressive reduction of distance 
    banpos.x += distX/5;
    banpos.y += distY/2;
    
    banana.style.left = banpos.x + "px";
    banana.style.top = banpos.y + "px";

    
}