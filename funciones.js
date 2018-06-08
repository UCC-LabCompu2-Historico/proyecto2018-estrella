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
    //ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    ctx.ellipse(cenX, cenY, 50, 75, 90 * Math.PI/180, 0, 2 * Math.PI);
    ctx.stroke();
}