function ingresarUsuario() {
    let ingresarUsuario = prompt("Hola! Bienvenida/o a nuestra tienda \nPorfavor ingrese su usuario.");
    alert("Hola " + ingresarUsuario + "," + " porfavor seleccione los productos que desea en la siguiente página:");
}

ingresarUsuario()

function productos() {
    let ingreso = prompt("Ingresa el número correspondiente a la opción que deseas. \n 1-Limpiador $359 \n 2-Serum $680 \n 3-Hidratante $520 \n 4-Tratamiento $450 \n 5-Pantalla solar SPF +50 $890");
    while (ingreso != "SALIR" && ingreso != "salir") {
        switch (ingreso) {
            case "1":
                alert("Seleccionaste Limpiador");
                break;
            case "2":
                alert("Seleccionaste Serum");
                break;
            case "3":
                alert("Seleccionaste Hidratante");
                break;
            case "4":
                alert("Seleccionaste Tratamiento");
                break;
            case "5":
                alert("Seleccionaste Pantalla solar SPF +50");
                break;
            default:
                alert("Opcion no valida");
                break;
        }
        ingreso = prompt("Ingresa el número correspondiente a la opción que deseas. \n 1-Limpiador $359 \n 2-Serum $680 \n 3-Hidratante $520 \n 4- Tratamiento $450 \n 5-Pantalla solar SPF +50 $890 \n\n Para salir ingresa SALIR")
    }
}
productos()

const muestrasElegidas = [];
let cantidad = 2;

do {
    let entrada = prompt("Con tu compra ofrecemos muestras gratis de productos, selecciona hasta 2 de las siguientes opciones: \n 1-Foam Cleanser piel mixta/grasa \n 2-Foam Cleanser piel sensible/seca \n 3-Cleansing Balm \n 4-Exfoliante BHA+AHA ");
    muestrasElegidas.push(entrada);
} while (muestrasElegidas.length != cantidad)
alert("Tus opciones seleccionadas son " + muestrasElegidas + ". Gracias por comprar con nosotras :)");

