function draw () {
    var canvas =document.getElementById("worship");
    canvas.style.border="3px dotted red";
    var context = canvas.getContext("2d");
    context.font = "26px Verdana";
    context.fillText("I love JavaScript",11,48);
    context.fillStyle="#F1DA4E";
    context.fillRect(50,80,134,134)
    var img = document.getElementById("JS");
    context.drawImage(img,50,80);

}