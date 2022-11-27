// carrito de compras: Eduardo Pérez Paz

carrito = [];
lista = prompt("¿Que es lo que va a llevar del super?");
carrito.push(lista);
while (confirm("¿Algo mas?")) {
  lista = prompt("¿Que mas va a llevar del super?");
  carrito.push(lista);
}
for (let lista of carrito) {
  console.log(lista);
}
  alert("Su lista de compras es: "+carrito);
