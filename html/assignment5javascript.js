
var startTime = new Date().getTime();

function getRandomColor() {
    var colorLetters = "0123456789ABCDEF".split("");
    var color = "";
    for (i=0, i < 6, i++) {
        color += colorLetters[Math.floor(Math.random() * 16)]; 
    }
return color; 
}
 
function shapeSize () {
   
    var height = Math.floor((Math.random() * 300) + 10);
    var width = Math.floor((Math.random() * 300) + 10);
    document.getElementById("shape").style.height = height + "px";
    document.getElementById("shape").style.width = width + "px";
}



function makeShapeAppear() {
    
    var color = getRandomColor();
    var left = Math.floor((Math.random() * 200) + 20);
    var top = Math.floor((Math.random() * 200) + 20);
    document.getElementById("shape").style.marginLeft = left + "px";
    document.getElementById("shape").style.marginTop = top + "px";
     document.getElementById("shape").style.display = "block";  
    if (Math.random() > 0.5) {            
        document.getElementById("shape").style.borderRadius = "50%";               
    } else {              
        document.getElementById("shape").style.borderRadius = "0%";
    }             
    document.getElementById("shape").style.backgroundColor = color;          
    startTime = Date.getTime();

}
            
function appearAfterDelay() {
                
    setTimeout(makeShapeAppear, Math.random() * 2000);
}
            
appearAfterDelay();
            
document.getElementById("shape").onclick = function () {
                
    document.getElementById("shape").style.display = "none";
 
    var endTime = Date.getTime();
                
    var timeTaken = (endTime - startTime) / 1000;
                
    document.getElementById("timeTaken").innerHTML = timeTaken + "sec";
                
    appearAfterDelay();
}

