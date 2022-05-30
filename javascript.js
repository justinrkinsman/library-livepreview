let myLibrary = [];

function Book() {
    this.title = document.getElementById('title').value
    this.author = document.getElementById('author').value
    this.page = document.getElementById('page').value
    this.read = document.querySelector('input[name="read"]:checked').value
    this.info = (`${this.title} by ${this.author} \ ${this.page} pages\ Read? ${this.read}`)
}

let btn = document.getElementById('add')
    btn.addEventListener('click', createTable);

function addBookToLibrary(){
    newBook = new Book
    myLibrary.push(newBook)
    return(myLibrary)
}

function clearScreen() {
    let element = document.getElementById('table') 
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

function createTable() {
    clearScreen()
    addBookToLibrary()
    myLibrary.forEach(function(number) {
        const para = document.createElement('p');
        const node = document.createTextNode(number)
        const del = document.createElement("button")
        del.innerText = 'Delete'
        const change = document.createElement('button')
        change.innerText = 'Change Read Status'
        para.appendChild(node)
        const element = document.getElementById('table')
        element.style.display = 'grid'
        const card = document.createElement('div')
        element.appendChild(card)
        card.appendChild(para)
        card.appendChild(del)
        card.appendChild(change)
        card.setAttribute('style', 'background-color: #000080; color: white;')
        console.log(myLibrary.join(' '))  
    })
}







/*
    myLibrary.splice(0, 4, title, author, page, read)
    return myLibrary.join(' ')*/