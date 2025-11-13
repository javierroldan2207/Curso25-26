const urlArticles = "http://localhost:3000/articles";
const urlComments = "http://localhost:3000/comments";
const urlUsers = "http://localhost:3000/users";


const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

async function fetchArticleDetails(id) {
    const response = await fetch(`${urlArticles}/${id}`);
    const article = await response.json();
    return article;
}

async function fetchUser(userId) {
    const response = await fetch(`${urlUsers}/${userId}`);
    const user = await response.json();
    return user;
}

async function fetchComments(articleId) {
    const response = await fetch(`${urlComments}?postId=${articleId}`);
    const comments = await response.json();
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = "";

    for (let comment of comments) {
        const user = await fetchUser(comment.userId);
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${comment.title}: ${comment.content}`;
        commentsList.appendChild(li);
    }
}

async function fetchAllUsers() {
    const response = await fetch(urlUsers);
    const users = await response.json();
    return users;
}

async function populateUserSelect() {
    const users = await fetchAllUsers();
    const select = document.getElementById('commentAuthor');
    select.innerHTML = "";

    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.textContent = user.name;
        select.appendChild(option);
    });
}
async function renderArticlePage() {
    const article = await fetchArticleDetails(articleId);
    const user = await fetchUser(article.userId);

    document.getElementById('postTitle').textContent = article.title;
    document.getElementById('postAuthor').textContent = `Autor: ${user.name}`;
    document.getElementById('postContent').textContent = article.contenido;

    await fetchComments(article.id);
    await populateUserSelect();
}


renderArticlePage();

