// HTML elements
const inventory = {
    items: [
        { name: "Laptop", quantity: 5, price: 1200 },
        { name: "Mouse", quantity: 55, price: 20 },
        { name: "Keyboard", quantity: 15, price: 50 }
    ],
    totalItems: 0
};


function updateTotalItems(inventory) {
    inventory.totalItems = inventory.items.reduce((total, product) => total + product.quantity, 0)
}

function addItem(itemName, quantity, price, inventory) {
    const product = inventory.items.find(product => product.name.toLowerCase() === itemName.toLowerCase());
    let response = 'added';
    if (product) {
        product.quantity += quantity;
        product.price = price;
        response = 'updated';
    } else {
        inventory.items.push({ name: itemName, quantity, price })
    }
    updateTotalItems(inventory)
    return response;
}

function removeItem(itemName, inventory) {
    const productIndex = inventory.items.findIndex(product => product.name.toLowerCase() === itemName.toLowerCase());
    if (productIndex != -1) {
        inventory.items.splice(productIndex, 1)
    }
    updateTotalItems(inventory)
}

/*function removeItem2(itemName, inventory){
    inventory.items = inventory.items.filter(product => product.name.toLowerCase() != itemName.toLowerCase())
    updateTotalItems(inventory)
}*/


const nameInput = document.getElementById('name');
const quantityInput = document.getElementById('quantity');
const priceInput = document.getElementById('price');
const addProductForm = document.getElementById('addProduct');
const tbody = document.querySelector('tbody');

function addRow({ name, quantity, price }) {
    const newRow = document.createElement('tr');
    if(price > 50){
        newRow.style.backgroundColor = "#ff0000ce";
    }
    //Name
    const newNameCell = document.createElement('td');
    newNameCell.textContent = name;
    //Quantity
    const newQuantityCell = document.createElement('td');
    newQuantityCell.textContent = quantity;
    //Price
    const newPriceCell = document.createElement('td');
    newPriceCell.textContent = price;
    //Actions
    const newActionsCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    newActionsCell.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        removeItem(name, inventory);
        tbody.removeChild(newRow);
    });
    
    
    
    //Add cells to the row
    newRow.appendChild(newNameCell);
    newRow.appendChild(newQuantityCell);
    newRow.appendChild(newPriceCell);
    newRow.appendChild(newActionsCell);

    //Add row to the table
    tbody.appendChild(newRow);
}


function renderTable(inventory) {
    tbody.innerHTML = '';
    inventory.items.forEach(product => {
        addRow(product)
    });
}

addProductForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const quantity = quantityInput.value;
    const price = priceInput.value;
    if (name && quantity > 0 && price > 0) {

        const response = addItem(name, quantity, price, inventory);
        if (response == 'added') {
            addRow({ name, quantity, price });
        } else {
            updateRow({ name, quantity, price })
        }
    }
})

function updateRow({ name, quantity, price }) {
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => {
        const nameSelector = tbody.querySelector('td');

    });

}

renderTable(inventory);