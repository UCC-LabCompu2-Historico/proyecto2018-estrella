var planetas = [
    {
        nombre:"mercurio",
        x:400,
        y:245,
        orbita: 45,
        tamanio: 5,
        color: "#f00"
    },{
        nombre:"venus",
        x:400,
        y:270,
        orbita: 70,
        tamanio: 5,
        color: "#f00"
    },{
        nombre:"tierra",
        x:400,
        y: 120,
        orbita: 80,
        tamanio: 5,
        color: "#f00"
    },{
        nombre:"marte",
        x:400,
        y: 105,
        orbita: 95,
        tamanio: 5,
        color: "#f00"
    },{
        nombre:"jupiter",
        x:400,
        y: 310,
        orbita: 110,
        tamanio: 5,
        color: "#f00"
    },{
        nombre:"saturno",
        x:400,
        y:70,
        orbita: 130,
        tamanio: 5,
        color: "#f00"
    },{
        nombre:"urano",
        x:400,
        y: 345,
        orbita: 145,
        tamanio: 5,
        color: "#f00"
    },{
        nombre:"neptuno",
        x:400,
        y: 370,
        orbita: 170,
        tamanio: 5,
        color: "#f00"
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

        //planetas
        ctx.beginPath();
        ctx.fillStyle =i.color;
        ctx.moveTo(i.x,i.y)
        ctx.arc(i.x, i.y, i.tamanio, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    }





    
  
   

    

