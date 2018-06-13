function validar() {
    var x = document.forms["formulario"]["fechayear"].value;
    if (x == "") {
        alert("Debe ingresar anio");
        return false;
    }
}


