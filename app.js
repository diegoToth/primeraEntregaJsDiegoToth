


const cerroCatedral = {
    nombre: `Cerro Catedral`,
    precio: 3000,
}
const islaVictoria = {
    nombre: `Isla Victoria`,
    precio: 3500,
}
const puertoBlest = {
    nombre: `Puerto Blest`,
    precio: 4000,
}
const sanMartinDeLosAndes = {
    nombre: `San Martin De Los Andes`,
    precio: 5000,
}  

let excursion = prompt(`Donde tenes ganas de ir hoy?


Cerro Catedral
Isla Victoria
Puerto Blest
San Martin De Los Andes`
);



switch (excursion) {
    case "Cerro Catedral":
        console.log("Cerro Catedral");
        break;
    case "Isla Victoria":
        console.log("Isla Victoria");
        break;
    case "Puerto Blest":
        console.log("Puerto Blest");
        break;
    case "San Martin De Los Andes":
        console.log("San Martin de los Andes")
        break;
    default:
        console.log(`Ingreso Invalido`);
        break;    
}
alert(`Elegiste ${excursion}`);

if (excursion == "Cerro Catedral"){
    console.log(cerroCatedral);
} else if (excursion == "Isla Victoria"){
    console.log(islaVictoria);
} else if (excursion == "Puerto Blest"){
    console.log(puertoBlest);
} else if (excursion == "San Martin De Los Andes"){
    console.log(sanMartinDeLosAndes);
}


let formaDePago = prompt(`De que forma queres abonar?

Efectivo
Tarjeta de Credito
`);



switch (formaDePago) {
    case "Efectivo":
    console.log("Efectivo");
    break;
    case "Tarjeta de Credito":
        console.log("Tarjeta de Credito");
    break;
    default:
        alert("Metodo de pago no aceptado");
    break;
    
}



if (formaDePago == "Tarjeta de Credito"){
    let  cuotas = prompt(`Elegi Cantidad de cuotas
    
    1 Cuota
    2 Cuotas
    3 Cuotas`)
    
    
    switch (cuotas) {
            case "1 Cuota ":
            console.log("1 Cuota");
            break;
            case "2 Cuotas":
                console.log("2 Cuotas");
            break;
            case "3 Cuotas":
                console.log("3 Cuotas");
            break;
            default:
                alert("Ingreso Invalido");
            break;
            
        }   
    
    if (cuotas == "1 Cuota") {
        console.log(cerroCatedral.precio);
    } else if (excursion == "Isla Victoria"){
        console.log(islaVictoria.precio);
    } else if (excursion == "Puerto Blest"){
        console.log(puertoBlest.precio);
    } else if (excursion == "San Martin De Los Andes"){
        console.log(sanMartinDeLosAndes.precio);
    }
    
    if (cuotas == "2 Cuotas") {
        console.log(cerroCatedral.precio / 2)
    } else if (excursion == "Isla Victoria"){
        console.log(islaVictoria.precio / 2);
    } else if (excursion == "Puerto Blest"){
        console.log(puertoBlest.precio / 2);
    } else if (excursion == "San Martin De Los Andes"){
        console.log(sanMartinDeLosAndes.precio / 2);
    }
    
    if (cuotas == "3 Cuotas") {
        console.log(cerroCatedral.precio / 3);
    } else if (excursion == "Isla Victoria"){
        console.log(islaVictoria.precio / 3);
    } else if (excursion == "Puerto Blest"){
        console.log(puertoBlest.precio / 3);
    } else if (excursion == "San Martin De Los Andes"){
        console.log(sanMartinDeLosAndes.precio / 3);
    }
    
    
    
    alert("Gracias Por su Compra");
} else {
    alert("No ingreso datos");
    
}

