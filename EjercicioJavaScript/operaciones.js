function factorial() {
    var n = parseInt(prompt("ingrese el numero"));
    var f = 1;
    for (var i = 1; i <= n; i++) {
        f *= i;
    }


    document.write("el factorial es " + f);
}
function fechaActual(){
    var fecha=new Date();
    document.write("hoy es"+ fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear());

}

function suma(){
    var n1=parseInt(prompt("ingrese el numero uno"));
    var n2=parseInt(prompt("ingrese el numero dos"));
    var s=n1+n2;
    document.write("la suma es:" + s);
}

function mostrar1(){
    var nom=document.getElementById("nombre").value;
    var ed=document.getElementById("edad").value;
    alert("ingrese el nombre:"+nom);
    alert("ingrese la edad:"+ed);
}
function opciones() {
    var seleccion = parseInt(prompt(
        "1. Factorial" + "\n" +
        "2. Fecha Actual" + "\n" +
        "3. suma" + "\n" +
        "4. Generar Numeros" + "\n" +
        "5. Calcular Sueldos" + "\n" + "\n" +
        "SELECIONAR UNA OPCION:"));
    if (seleccion == 1) {
        factorial();
    }

    if (seleccion == 2) {
        fechaActual();
    }
    if (seleccion == 3) {
       suma();
    }
    
     if (seleccion == 4) {
        generarNumeros();
     }
    if (seleccion == 5) {
        var sueldo=new Array(2);
        cargarSueldos(sueldo);
          document.write("El sueldo es: "+calcularGastos(sueldo));
    }if (seleccion == 7) {
        generarNumeros();
    }

}

function menu(){
document.write("1.-suma <br> 2.-factorial<br>3.-Fecha");

}
function casos(){
   
    var op=parseInt(document.getElementById("txtOp").value);
    alert("selecciono la opcion"+op);
    switch(op){
        case 1:
            suma();
            breack;
            case 2:
                factorial();
                breack;
                case 3:
                    fechaActual();
                    breack;
    }
}
function cargarSueldos(array){
    for(var i=0;i<array.length;i++){
        array[i]=parseInt(prompt("ingrese sueldos"));
    }

}
function calcularGastos(pagos){
    var acu=0;
    for(var i=0;i<pagos.length;i++){
        acu+=pagos[i];
    }
    return acu;
}
function generarNumeros(){
    var dim=parseInt(prompt("Ingresa la dimencion"));
    var listaNum=new Array(dim);
    for(var i=0;i<listaNum.length;i++){
        listaNum[i]=parseInt(Math.random()*5);
    }
    document.write(listaNum.toString());
}