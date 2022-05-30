let myLibrary = [];

function Book(title, author, page) {
    this.title = title,
    this.author = author,
    this.page = page
}

function addBookToLibrary() {
    myLibrary.push(hobbit)
    myLibrary.push(phantom)
    myLibrary.push(davinci)
    console.log(myLibrary)
}

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295')
const phantom = new Book('The Phantom of the Opera', 'Gaston Leroux', '269')
const davinci = new Book('The Da Vinci Code', 'Dan Brown', '454')


addBookToLibrary()