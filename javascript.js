let myLibrary = [];

function Book(title, author, page) {
    this.title = title,
    this.author = author,
    this.page = page
}

let btn = document.getElementById('add')
    btn.addEventListener('click', buttonClick);

function buttonClick(){
    const para = document.createElement('p');
    const node = document.createTextNode(addBookToLibrary())
    para.appendChild(node)
    const element = document.getElementById('card')
    element.appendChild(para)
}

function addBookToLibrary(){
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let page = document.getElementById('page').value
    let read = document.querySelector('input[name="read"]:checked').value
    myLibrary.splice(0, 4, title, author, page, read)
    return myLibrary.join(' ')
}