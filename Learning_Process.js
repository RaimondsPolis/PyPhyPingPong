/*
    // Draw a fill rectange, starting top left x and y, for a width and height
    ctx.fillRect(100, 100, 20, 10);
    ctx.fillStyle= "red";
    ctx.fillRect(90, 90, 10, 50);
    ctx.fillStyle= "white";
    ctx.fillRect(80, 80, 50, 10)

   
    ctx.lineWidth=4;//thickness of the line
    ctx.strokeStyle= "red"; //color of the line
    ctx.strokeRect(50, 50, 20, 40); //draws the outline of the shape

    //-------------
    ctx.fillStyle= "green";
    ctx.strokeStyle= "red";
    ctx.lineWidth= 4;        //the following draws a green rectangle with a red outline

    ctx.fillRect(200, 50, 70, 90);
    ctx.strokeRect(200, 50, 70, 90);
    //--------------
    ctx.fillStyle="yellow";//šis pats strādā tekstam
    ctx.strokeStyle="black";//šis pats strādā tekstam
    ctx.lineWidth = 2; //šis pats strādā arī teksta outlineam
    ctx.font= "60px Arial"; // FONT AND SIZE of the text
    ctx.fillText("Hello", 10, 50); // TEXT CONTENT AND X, Y POSITION
    ctx.strokeText("Goodbye", 10, 110);// TEXT CONENT OUTLINE AND X, Y POSITION
    //--------------
    ctx.beginPath();                         // Start drawing something
    ctx.arc(150, 150, 100, 0, Math.PI*2);   // Make it a circle (X, Y, NO KURIEnes, LĪDZ KURIENEI (!!!RADIĀNOS!!!))
    ctx.stroke();                            // Outline an outline
    //--------------
    //RECTANGLES ARE POSITIONED ON THE TOP LEFT OF THEIR GIVEN COORDINATE
    //CIRCLES ARE POSITIONED ON THE CENTER OF THE GIVEN COORDINATE
    //--------------
    ctx.beginPath();
    ctx.arc(200, 200, 25, 0, Math.PI * 2);
    ctx.fillStyle= "green";
    ctx.fill(); // lai iekrāsotu apli
    //--------------
    function fillCircle (x, y, radius, colour) {
        ctx.beginPath();
        ctx.fillStyle= colour;
        ctx.arc(x, y, radius, 0, Math.PI * 2);// advanced FILL CIRCLE f(x)
        ctx.fill();
    }
    //-----------------
        var corner= 0;
        var size = 0;
        while (corner < 500) {
            ctx.strokeRect(corner, corner, size, size);//WHILE LOOP PIEMĒRS
            corner= corner + 5;
            size +=10;
        }
        ctx.fillRect(corner, corner, 50, 50);
    //-------------
    for (var corner= 0; corner < 100; corner= corner+1) { //FOR LOOP PIEMĒRS
        ctx.strokeRect(corner, corner, 50, 50);
    }
    //-------------
    var thing = Math.random(); //returno random skaitli no 0(ieskaitot) līdz 1(neieskaitot)
    //-------------
    var thing = Math.floor(Math.random() * 20); // returno random INTIGER(veselu skaitli) no 1 - 19 ieskaitot
    //---------------
    function RandInt(up_to) { 
        n = Math.floor(Math.random() * up_to);  //returno random intiger līdz dortajam skaitlim
        return(n);  
   } 

   fillCircle(RandInt(myCanvas.width), RandInt(myCanvas.height), RandInt(30), "red"); // draw circle in random place with random size
   // myCanvas.height ir no canvas id 16. rindiņā (id="myCanvas")un height/ width vnk izvēlas kuru parametru mainīs
   //--------------
   function CircleRandColour (x, y, radius) {
  r = RandInt(3);   // r will be 0, 1 or 2
  if (r == 0) {
             ctx.fillStyle = "red";
             }
  else if (r == 1) {
             ctx.fillStyle= "green"; // RANDOM COLOR 
             }
  else if (r == 2) {
             ctx.fillStyle= "blue";
             }
    }
    //-------------

    var y_pos = 0;

    function MyTimer () {
        //ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //CLEAR/GET RID OF ALL SHAPES
        y_pos = y_pos + 4;
        ctx.strokeRect(120, y_pos, 60, 60);//MAKING SPRITES MOVE N SHIT
    }

    setInterval(MyTimer, 500);//TIME DELAY

    KUSTĪBAS PROTOTIPS ---- SCRAPPED 


    var y_pos = 300;
    var x_pos = 300;
    var new_x = 50;
    var new_y = 50;
    var angle =0;
    ctx.strokeStyle= "red";
    ctx.lineWidth= 2;
    //ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    function MyTimer1 (MyEvent) {

        ctx.clearRect(x_pos-1, y_pos-1, 52 ,52);//falling object ish
            if (MyEvent.keyCode == 39) {x_pos = x_pos + 10;}   // right
            if (MyEvent.keyCode == 40) {y_pos = y_pos + 10;}   // down
            if (MyEvent.keyCode == 37) {x_pos = x_pos - 10;} 
            if (MyEvent.keyCode == 38) {y_pos = y_pos - 10;} 
            if (MyEvent.keyCode == 38) {
               ctx.rotate(angle)//????????????????????????????????????
               angle +=10;
            }
        ctx.strokeRect(x_pos, y_pos, 50, 50);
    }


    window.addEventListener("keydown", MyTimer1);
*/