let inventory = {
  items: [
    { name: "Laptop", quantity: 5, price: 1200 },
    { name: "Mouse", quantity: 25, price: 20 },
    { name: "Keyboard", quantity: 15, price: 50 }
  ],
  totalItems: 0
};

//Actualiza la propiedad totalItems automáticamente sumando las cantidades de cada artículo del array items.

inventory.totalItems = inventory.items.reduce((total, item) => total + item.quantity);


//Crea un método addItem(itemName, quantity, price) que añada un nuevo artículo al inventario o actualice el quantity si el artículo ya existe.
function addItem(itemName, quantity, price) {
  let item = inventory.items.find(i => i.name === itemName);
  if(item){
    item.quantity += quantity;
  }else{
    inventory.items.push({ name: itemName, quantity: quantity, price: price})
  }
}
addItem("Monitor", 10, 300);
console.log(inventory.items);
  

//Crea un método removeItem(itemName) que elimine un artículo del inventario basado en su nombre.
function removeItem(itemName){
  let item = inventory.items.find(i => i.name === itemName);
  if(item){
    let index =  inventory.items.indexOf(item);
    inventory.items.splice(index, 1);
  }
}

//Imprime en consola el nombre de todos los artículos que cuestan más de 50.
inventory.items.forEach (item => {
  if(item.price > 50){
    console.log(item.name);
  }
});

//Obtén la cantidad total de artículos en stock cuyo nombre contenga la letra "o" (manipulación de cadenas).
let totalStock = 0;
inventory.items.forEach(item => {
  if(item.name.includes("o")){
     totalStock = item.quantity;
  }
  console.log(totalStock);
});