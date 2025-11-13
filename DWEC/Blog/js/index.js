const urlUsers = "http://localhost:3000/users";
const urlArticles = "http://localhost:3000/articles";

async function getUsers() {
    const response = await fetch(urlUsers);
    const users = await response.json();
    return users;
}

async function getArticles() {
    const response = await fetch(urlArticles);
    const articles = await response.json();
    return articles;
}

async function renderTable() {
    const tbody = document.getElementById("postsTable");

    const articles = await getArticles();
    const users = await getUsers();

    tbody.innerHTML = "";

    articles.forEach(article => {
        const user = users.find(us => us.id === article.userId);

        const tr = document.createElement("tr");

        const tdTitle = document.createElement("td");
        tdTitle.textContent = article.title;

        const tdAuthor = document.createElement("td");
        tdAuthor.textContent = user ? user.name : "Desconocido";

        const delbutton = document.createElement("button");
        const vewButton = document.createElement("button");

        delbutton.textContent = '🗑️'
        vewButton.textContent = '👀'
        const tdActions = document.createElement("td");
        
        tdActions.appendChild(delbutton);
        tdActions.appendChild(vewButton);
        
        delbutton.addEventListener("click", async () => {
            await deleteArticle(article.id);
        });

        vewButton.addEventListener("click", async () =>{
            await vewPage(article.id);
        })
        
        tr.appendChild(tdTitle);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdActions);

        tbody.appendChild(tr);
    });
}

renderTable();



async function deleteArticle(id) {
    const response = await fetch(`${urlArticles}/${id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        console.log(`Artículo con id ${id} eliminado correctamente`);
        renderTable(); 
    } else {
        console.error("Error al eliminar el artículo");
    }
}

async function vewPage(id){
    const response = await fetch(`${urlArticles}/${id}`);
    const article = await response.json();
    window.location.href = `post-details.html?id=${id}`;
}