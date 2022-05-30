let myLibrary = [];

function Book(title, author, page) {
    this.title = title,
    this.author = author,
    this.page = page
}

let btn = document.getElementById('add')
    btn.addEventListener('click', buttonClick);

function buttonClick(){
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let page = document.getElementById('page').value
    let read = document.querySelector('input[name="read"]:checked').value
    console.log(title, author, page, read)
}

function addBookToLibrary() {
    myLibrary.push()
}

addBookToLibrary()