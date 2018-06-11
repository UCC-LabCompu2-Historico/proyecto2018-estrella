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

    ctx.beginPath();
    //ctx.ellipse(x, y, radiusX acho vertical, radiusY ancho horizontal, rotation, startAngle, endAngle, anticlockwise);
    ctx.ellipse(cenX, cenY, 45, 95, 90 * Math.PI/180, 0, 2 * Math.PI); //Mercury's orbit path
    ctx.stroke();
    ctx.ellipse(cenX, cenY, 70,130, 90 * Math.PI/180, 0, 2 * Math.PI); // Venus's orbit path
    ctx.stroke();
    ctx.ellipse(cenX, cenY, 80, 170, 90 * Math.PI/180, 0, 2 * Math.PI); // Earth's orbit path
    ctx.stroke();
    ctx.ellipse(cenX,cenY,95,200, 90 * Math.PI/180, 0, 2 * Math.PI ); //Mars's orbit path
    ctx.stroke();
    ctx.ellipse(cenX,cenY,110,230, 90 * Math.PI/180, 0, 2 * Math.PI ); // Jupiter's orbit path
    ctx.stroke();
    ctx.ellipse(cenX,cenY,130,260, 90 * Math.PI/180, 0, 2 * Math.PI ); //Saturn's orbit path
    ctx.stroke();
    ctx.ellipse(cenX,cenY,145,285, 90 * Math.PI/180, 0, 2 * Math.PI ); //Uranus's orbit path
    ctx.stroke();
    ctx.ellipse(cenX,cenY,170,300, 90 * Math.PI/180, 0, 2 * Math.PI );  // Pluto's orbit path - neptuno
    ctx.stroke();
    cxt.closePath();


    // Pl

    cxt.noStroke();
    var MercuryX=365;
    var MercuryY= 327;
    var VenusX = 416;
    var VenusY = 256;
    var EarthX = 202;
    var EarthY = 358;
    var MarsX = 217;
    var MarsY = 188;
    var JupiterX = 366;
    var JupiterY = 157;
    var SaturnX = 72;
    var SaturnY = 208;
    var UranusX = 318;
    var UranusY = 462;
    var PlutoX = 501; //neptuno
    var PlutoY = 429; //neptuno


}