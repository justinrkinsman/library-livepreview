let myLibrary = [];

function Book() {
    this.title = document.getElementById('title').value
    this.author = document.getElementById('author').value
    this.page = document.getElementById('page').value
    this.read = document.querySelector('input[name="read"]:checked').value
}

let btn = document.getElementById('add')
    btn.addEventListener('click', addRow);

function addBookToLibrary(){
    newBook = new Book
    myLibrary.push(newBook)
    return myLibrary
}

function clearForm() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('page').value = ''
}

function addRow() {
    addBookToLibrary()
    clearForm()
    let table = document.getElementById('table')
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    let cell5 = row.insertCell(4)
    let cell6 = row.insertCell(5)
    cell1.innerText = `${newBook.title}`;
    cell2.innerText = `${newBook.author}`
    cell3.innerText = `${newBook.page}`
    cell4.innerText = `${newBook.read}`
    cell5.innerText = 'Delete'
    cell6.innerText = 'Change Read Status'
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
        const title = document.createTextNode(myLibrary[title])
        const del = document.createElement("button")
        del.innerText = 'Delete'
        del.setAttribute('id', 'delBtn')
        const change = document.createElement('button')
        change.innerText = 'Change Read Status'
        change.setAttribute('id', 'readStatus')
        para.appendChild(title)
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

/*let delBtn = document.getElementById('delBtn')
delBtn.addEventListener('click', removeCard())





/*
    myLibrary.splice(0, 4, title, author, page, read)
    return myLibrary.join(' ')*/