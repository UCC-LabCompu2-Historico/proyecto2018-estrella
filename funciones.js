
var planetas = [
    {
        nombre:"mercurio",
        x:400,
        y:245,
        orbita: 45,
        tamanio: 5,
        color: "#f00",
        mostrar: true,
        velocidad: 0.1,
        pos_rad:0
    },{
        nombre:"venus",
        x:400,
        y:270,
        orbita: 70,
        tamanio: 5,
        color: "#f00",
        mostrar: true,
        velocidad: 0.015,
        pos_rad:0
    },{
        nombre:"tierra",
        x:400,
        y: 120,
        orbita: 80,
        tamanio: 5,
        color: "#f00",
        mostrar: true,
        velocidad: 0.026,
        pos_rad:0
    },{
        nombre:"marte",
        x:400,
        y: 105,
        orbita: 95,
        tamanio: 5,
        color: "#f00",
        mostrar: true,
        velocidad: 0.017,
        pos_rad:0
    },{
        nombre:"jupiter",
        x:400,
        y: 310,
        orbita: 110,
        tamanio: 5,
        color: "#f00",
        mostrar: true,
        velocidad: 0.013,
        pos_rad:0
    },{
        nombre:"saturno",
        x:400,
        y:70,
        orbita: 130,
        tamanio: 5,
        color: "#f00",
        mostrar: true,
        velocidad: 0.1,
        pos_rad:0
    },{
        nombre:"urano",
        x:400,
        y: 345,
        orbita: 145,
        tamanio: 5,
        color: "#f00",
        mostrar: true,
        velocidad: 0.021,
        pos_rad:0
    },{
        nombre:"neptuno",
        x:400,
        y: 370,
        orbita: 170,
        tamanio: 5,
        color: "#f00",
        mostrar: true,
        velocidad: 0.009,
        pos_rad:0
    }
    ];

/**
 * Dibuja los planetas
 * @method dibujar_planetas
 * @param Parámetro A
 * @return Valor que retorna
 */
function dibujar_planetas(){
    var canvas = document.getElementById('Canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var cenX= canvas.width/2;
    var cenY= canvas.height/2;

    // for(var i=0; i< radios.length; i++)
    for(var i of planetas){
        //orbitas

        ctx.beginPath();
        ctx.moveTo(cenX+i.orbita,200);
        ctx.arc(cenX, cenY, i.orbita, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.closePath();

        if(i.mostrar) {
            //planetas
            ctx.beginPath();
            ctx.fillStyle = i.color;
            ctx.moveTo(i.x, i.y);
            ctx.arc(i.x, i.y, i.tamanio, 0, 2 * Math.PI, false);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
    }
    }




function validar() {
    var x = document.forms["formulario"]["fechayear"].value; //como hacerla global
    if (x == "" || x<0 || x.length<4 ) {
        alert("Debe ingresar anio valido");
        for(var i of planetas){
            i.pos_rad= x;  //como haces para que el anio que te ingresan modifique la posicion radial de cada planeta?? metes otro numero, apretas ok y no cambia la pos radial
        }
        return false;

    }
}

var interval;

var a=0;

function moverplanetas() { //despues de dinujarlos vuelven a cero
    clearInterval(interval);
    var x = document.forms["formulario"]["fechayear"].value/2000;


    for(var i of planetas){
        i.pos_rad = x;
        i.x= 400 + i.orbita* Math.cos(i.pos_rad);
        i.y= 200 + i.orbita* Math.sin(i.pos_rad);
    }

    interval=setInterval(animacion, 10);

}

function animacion(){

    for(var i of planetas){
        i.pos_rad += i.velocidad;
        i.x= 400 + i.orbita* Math.cos(i.pos_rad);
        i.y= 200 + i.orbita* Math.sin(i.pos_rad);
    }

    dibujar_planetas();
}



function desaparecerplanetas(numero) {

    planetas[numero-1].mostrar = !planetas[numero-1].mostrar;

        moverplanetas();

}

    

