let bookStore = {
  books: [
    { title: "1984", author: "George Orwell", price: 15, category: "Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 20, category: "Non-fiction" }
  ]
};

function addBook(title,author,price,category){
    bookStore.books.title = title;
    bookStore.books.author = author;
    bookStore.books.price = price;
    bookStore.books.category = category;
}

addBook("Selva", "Juan Miguel", 25, "Fiction");
console.log(bookStore.books);


//Crea un método getBooksByCategory(category) que devuelva un array con todos los libros de esa categoría.
function  getBookcategory(category){
    return bookStore.books.filter(book => book.category ===category);
}

getBookcategory("Fiction");


//Utiliza reduce() para calcular el precio total de todos los libros.
let totalPrice = bookStore.books.reduce((total, book) => total + book.price, 0);ç

//Utiliza filter() para devolver solo los libros cuyo precio sea mayor de 18.
let lowPrice = bookStore.books.filter(item => item.price > 18);

//Utiliza sort() para ordenar los libros por precio, de mayor a menor.

let order = bookStore.books.sort((a,b) => b.price - a.price);