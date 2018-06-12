/**
 * Dibuja los planetas
 * @method dibujar_planetas
 * @param Parámetro A
 * @return Valor que retorna
 */
function dibujar_planetas(){
    var canvas = document.getElementById('Canvas');
    var ctx = canvas.getContext('2d');
    var cenX= canvas.width/2;
    var cenY= canvas.height/2;
    

    var MercuryX=400;
    var MercuryY= 245;
    var VenusX = 400;
    var VenusY = 270;
    var EarthX = 400;
    var EarthY = 120;
    var MarsX = 400;
    var MarsY = 105;
    var JupiterX = 400;
    var JupiterY = 310;
    var SaturnX = 400;
    var SaturnY = 70;
    var UranusX = 400;
    var UranusY = 345;
    var NeptunoX = 400; //neptuno
    var NeptunoY = 370; //neptuno

    
    ctx.beginPath();
    
    //ctx.ellipse(x, y, radiusX acho vertical, radiusY ancho horizontal, rotation, startAngle, endAngle, anticlockwise);
    ctx.ellipse(cenX, cenY, 45, 95, 90 * Math.PI/180, 0, 2 * Math.PI); //Mercury's orbit path
    ctx.stroke();
    ctx.moveTo(400,270);
    ctx.ellipse(cenX, cenY, 70,130, 90 * Math.PI/180, 0, 2 * Math.PI); // Venus's orbit path
    ctx.stroke();
    ctx.moveTo(400,280);
    ctx.ellipse(cenX, cenY, 80, 170, 90 * Math.PI/180, 0, 2 * Math.PI); // Earth's orbit path
    ctx.stroke();
    ctx.moveTo(400,295);
    ctx.ellipse(cenX,cenY,95,200, 90 * Math.PI/180, 0, 2 * Math.PI ); //Mars's orbit path
    ctx.stroke();
    ctx.moveTo(400,310);
    ctx.ellipse(cenX,cenY,110,230, 90 * Math.PI/180, 0, 2 * Math.PI ); // Jupiter's orbit path
    ctx.stroke();
    ctx.moveTo(400,330);
    ctx.ellipse(cenX,cenY,130,260, 90 * Math.PI/180, 0, 2 * Math.PI ); //Saturn's orbit path
    ctx.stroke();
    ctx.moveTo(400,345);
    ctx.ellipse(cenX,cenY,145,285, 90 * Math.PI/180, 0, 2 * Math.PI ); //Uranus's orbit path
    ctx.stroke();
    ctx.moveTo(400,370);
    ctx.ellipse(cenX,cenY,170,300, 90 * Math.PI/180, 0, 2 * Math.PI );  // Pluto's orbit path - neptuno
    ctx.stroke();




    //mercurio
    ctx.moveTo(MercuryX,MercuryY)
    ctx.arc(MercuryX, MercuryY, 5, 0, 2 * Math.PI, false);
    ctx.stroke();
   
 //venus
 ctx.moveTo(VenusX,VenusY)
 ctx.arc(VenusX, VenusY, 5, 0, 2 * Math.PI, false);
 ctx.stroke();

  //tierra
  ctx.moveTo(EarthX,EarthY)
  ctx.arc(EarthX, EarthY, 5, 0, 2 * Math.PI, false);
  ctx.stroke();

 //marte
 ctx.moveTo(MarsX,MarsY)
 ctx.arc(MarsX, MarsY, 5, 0, 2 * Math.PI, false);
 ctx.stroke();

  //jupiter
  ctx.moveTo(JupiterX,JupiterY)
  ctx.arc(JupiterX, JupiterY, 5, 0, 2 * Math.PI, false);
  ctx.stroke();

   //saturno
   ctx.moveTo(SaturnX,SaturnY)
   ctx.arc(SaturnX, SaturnY, 5, 0, 2 * Math.PI, false);
   ctx.stroke();

 //urano
 ctx.moveTo(UranusX,UranusY)
 ctx.arc(UranusX, UranusY, 5, 0, 2 * Math.PI, false);
 ctx.stroke();

  //neptuno
  ctx.moveTo(NeptunoX,NeptunoY)
  ctx.arc( NeptunoX, NeptunoY, 5, 0, 2 * Math.PI, false);
  ctx.stroke();


   //roadster
   //ctx.moveTo(MercuryX,MercuryY)
   //ctx.arc(MercuryX, MercuryY, 5, 0, 2 * Math.PI, false);
   //ctx.stroke();


    cxt.closePath();

    
  
   

    

}