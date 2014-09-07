var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');

var drawFruit = function(num, color, colIndex){
    var widthDist=100;
    var fruitStackDist=25;
    
    //validation
    if (num>10) {
        alert("Too much fruit in column "+(colIndex+1)+"! Try again for that fruit!")
    }
    else    {
    //fruit drawing, loops depending on how much fruit user inputs and
    //what column
        for (var i=0;i<num;i++){
            var centerX = canvas.width /9+(widthDist*colIndex);
            var centerY = 250-(fruitStackDist*i);
            var radius = 10;
    
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.lineWidth = 0;
            ctx.strokeStyle = color;
            ctx.stroke();   
        }
    }
}

//main function, called upon document load
var draw=function(){
    ctx.clearRect(0,0,300,300);
    //footers
    ctx.font="16px futura";

    ctx.fillText("Apples",10,280);
    ctx.fillText("Oranges",100,280);
    ctx.fillText("Watermelons",190,280);
      
//APPLES         
    //use input value to print apples
    var appleIn = parseInt(document.getElementById("apples").value,10);

    ctx.save();
    drawFruit(appleIn,"red",0);
    ctx.restore();

//ORANGES          
    //use input value to print oranges
    var orangeIn = parseInt(document.getElementById("oranges").value,10);

    ctx.save();
    drawFruit(orangeIn,"orange",1);
    ctx.restore();
          
//WATERMELONS    
    //use input value to print watermelons
    var waterIn = parseInt(document.getElementById("watermelons").value,10);

    ctx.save();
    drawFruit(waterIn,"green",2);
    ctx.restore();
} 