let myLibrary = [];

function Book() {
    this.title = document.getElementById('title').value
    this.author = document.getElementById('author').value
    this.page = document.getElementById('page').value
    this.read = document.querySelector('input[name="read"]:checked').value
}

function changeReadStatus(choice){
    //Book.prototype.chgReadStatus = function(){
        if (choice == 'Yes'){
            console.log('No')
        }else if (choice == 'No'){
            console.log('Yes')
        }
    }
//}

Book.prototype.protoReadStatus = function(){
  //  choice = document.querySelector('input[name="read"]:checked').value
    let realReadStatus = document.getElementById('readStatus')
   // if (choice == 'Yes') {
      //  console.log(realReadStatus.textContent)
  //  }else if (choice == 'No') {
  //      console.log('Yes')
  //  }
}

let btn = document.getElementById('add')
    btn.addEventListener('click', addRow);

document.addEventListener('click', function(e){
    if(e.target && e.target.id== 'delBtn'){
        let attr = e.target.parentNode
        let attr2 = attr.parentNode.rowIndex
        let table = document.querySelector("tbody")
        table.deleteRow(attr2)
        }
    }
)

document.addEventListener('click', function(e){ 
    if(e.target && e.target.id== 'readBtn'){
        let attr = e.target.parentNode
        let attr2 = attr.parentNode.rowIndex
        let newReadStatus = myLibrary[attr2-1].read
       // myLibrary[attr2-1].protoReadStatus()
        let realReadStatus = document.getElementById(`readStatus${attr2-1}`)
        if (realReadStatus.textContent == 'Yes') {
            realReadStatus.textContent = 'No'
        }else if (realReadStatus.textContent == 'No') {
            realReadStatus.textContent = 'Yes'
        }
        console.log(realReadStatus)
        console.log(myLibrary[attr2-1])
        }
    }
)

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

function deleteRow(){
    let table = document.querySelector('tbody')
    table.deleteRow()
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
    let rowIndex = row.setAttribute("index", '0')
    for (let i = 0; i < myLibrary.length; i++) {
    cell1.innerText = myLibrary[i].title;
    cell2.innerText = myLibrary[i].author
    cell3.innerText = myLibrary[i].page
    cell4.innerText = myLibrary[i].read
    cell4.setAttribute('id', `readStatus${i}`)
    row.setAttribute('id', `rowID${i}`)
    rowIndex = row.setAttribute('index', `${i}`)
    }
    const del = document.createElement("button")
    del.innerText = 'Delete'
    del.setAttribute('id', 'delBtn')
    cell5.appendChild(del)
    const change = document.createElement('button')
    change.innerText = 'Change Read Status'
    change.setAttribute('id', 'readBtn')
    cell6.appendChild(change)
}


/*
function clearScreen() {
    let element = document.getElementById('table') 
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}/*

/*function createTable() {
    addBookToLibrary()
    myLibrary.forEach(function(number) {
        const para = document.createElement('p');
        const title = document.createTextNode(myLibrary[title])
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