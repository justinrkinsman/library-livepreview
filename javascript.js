let myLibrary = [];

function Book() {
    this.title = document.getElementById('title').value
    this.author = document.getElementById('author').value
    this.page = document.getElementById('page').value
    this.read = document.querySelector('input[name="read"]:checked').value
    this.info = `${this.title} by ${this.author}, ${this.page} pages. Have you read this book? ${this.read}`
}

let btn = document.getElementById('add')
    btn.addEventListener('click', addBookToLibrary);

function addBookToLibrary(){
    newBook = new Book
    const para = document.createElement('p');
    const node = document.createTextNode(newBook.info)
    const del = document.createElement("button")
    del.innerText = 'Delete'
    const change = document.createElement('button')
    change.innerText = 'Change Read Status'
    para.appendChild(node)
    const element = document.getElementById('table')
    const card = document.createElement('div')
    element.appendChild(card)
    card.appendChild(para)
    card.appendChild(del)
    card.appendChild(change)
    card.setAttribute('style', 'background-color: salmon; color: white;')
    console.log(newBook.info)
}






/*
function addBookToLibrary(){
    let titleForm = document.getElementById('title').value
    let authorForm = document.getElementById('author').value
    let pageForm = document.getElementById('page').value
    let bookForm = new Book(titleForm, authorForm, pageForm)
    console.log(bookForm)
    
    /*
    myLibrary.splice(0, 4, title, author, page, read)
    return myLibrary.join(' ')*/
//}