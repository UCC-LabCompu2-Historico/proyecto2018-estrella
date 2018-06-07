
function dibujarPlanetas() {
    var canvas = document.getElementById("Canvas");
    ctx = canvas.getContext("2d");

   // ctx.nostroke();

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

   // ctx.noFill();
    
    ctx.stroke(255, 255, 255,200);
    ctx.ellipse(306,295,242,75); //Mercury's orbit path
    ctx.stroke(194, 0, 0);
    ctx.ellipse(302,291,295,114); // Venus's orbit path
    ctx.stroke(3, 137, 255);
    ctx.ellipse(292,291,349,155); // Earth's orbit path
    ctx.stroke(166, 86, 0);
    ctx.ellipse(295,289,411,218); //Mars's orbit path
    ctx.stroke(179, 121, 34);
    ctx.ellipse(295,285,461,275); // Jupiter's orbit path
    ctx.stroke(255, 214, 51);
    ctx.ellipse(296,285,517,312); //Saturn's orbit path
    ctx.stroke(151, 169, 199);
    ctx.ellipse(295,285,551,354); //Uranus's orbit path
    ctx.stroke(173, 169, 151);
    ctx.ellipse(295,283,581,414);  // Pluto's orbit path - neptuno
    //ctx.nostroke();
    fill(255, 153, 0);
    ctx.ellipse(303,283,73,70); // The Sun
    fill(252, 251, 249);
    ctx.ellipse(MercuryX,MercuryY,-14,13);
    fill(194, 0, 0);
    ctx.ellipse(VenusX,VenusY,20,20); // Venus
    fill(3, 137, 255);
    ctx.ellipse(EarthX,EarthY,22,22); // Earth
    fill(166, 86, 0);
    ctx.ellipse(MarsX,MarsY,21,19); // Mars
    fill(255, 214, 51);
    ctx.ellipse(SaturnX,SaturnY,30,29); // Saturn
    fill(151, 169, 199);
    ctx.ellipse(UranusX,UranusY,31,31); // Uranus
    fill(173, 169, 151);
    ctx.ellipse(PlutoX,PlutoY,16,16); // Pluto
    fill(179, 121, 34);
    ctx.ellipse(JupiterX,JupiterY,36,34); // Jupiter

};

mouseClicked= function(){


};
