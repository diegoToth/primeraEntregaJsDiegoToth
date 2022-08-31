



let excursión = prompt(`Donde tenes ganas de ir hoy?

1:Cerro Catedral
2:Isla Victoria
3:Puerto Blest
4:San Martin de los Andes`
);


switch (excursión) {
    case "1":
    console.log(`excursión= ${"Cerro Catedral"}`);
    break;
    case "2":
        console.log("Isla Victoria");
    break;
    case "3":
        console.log("Puerto Blest");
    break;
    case "4":
        console.log("San Martin de los Andes");
    break;
    default:
        console.log("No se registra elección");
    break;
}

switch (excursión) {
    case "1":
    console.log(`Elección: ${excursión}, valor $3000`);
    break;
    case "2":
    console.log(`Elección: ${excursión}, valor $4000`);
    break;
    case "3":
    console.log(`Elección: ${excursión}, valor $3800`);
    break;
    case "4":
    console.log(`Elección: ${excursión}, valor $4500`);
    break;
    default:
    console.log("No se registra elección");
    break;
}




let FormaDePago = prompt(`De que forma queres abonar?

1:Efectivo
2:Tarjeta de Credito
3:Transferencia
4:Mercadopago`);


switch (FormaDePago) {
    case "1":
    console.log("Efectivo");
    break;
    case "2":
        console.log("Tarjeta de Credito");
    break;
    case "3":
        console.log("Transferencia");
    break;
    case "4":
        console.log("Mercadopago");
    break;
    default:
        console.log("No se registra elección");
    break;
}

let cantidadDePax = Number(prompt("Ingrese cantidad de pax"));
console.log(cantidadDePax);


