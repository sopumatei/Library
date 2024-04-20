const booksContainer = document.getElementById('books-container');

const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

book1 = new Book("Curentii Spatiului", "Isac Asimov", 345, true);
myLibrary.push(book1);

function addBookToLibrary(bk) {
    const bookCard = document.createElement('div');
    const title = document.createElement('h2');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const readBtn = document.createElement('button'); 
    const removeBtn = document.createElement('button'); 

    bookCard.classList.add('book-card');
    buttonGroup.classList.add('button-group');
    readBtn.classList.add('book-btn');
    removeBtn.classList.add('book-btn');

    title.textContent = `"${bk.title}"`;
    author.textContent = `Wrtitten by: ${bk.author}`;
    pages.textContent = `Pages: ${bk.pages}`;
    removeBtn.textContent = "Remove";

    if(bk.read) {
        removeBtn.textContent = "Read";
        removeBtn.style.backgroundColor = "#9fff9c";
    }
    else {
        removeBtn.textContent = "Not read";
        removeBtn.style.backgroundColor = "#ff9c9c";
    }

    readBtn.addEventListener('click', () => {
        if(readBtn.textContent === "Not read") {
            readBtn.style.backgroundColor = "#9fff9c";
            readBtn.textContent = "Read";
        }
        else {
            readBtn.style.backgroundColor = "#ff9c9c";
            readBtn.textContent = "Not read";
        }
    })

    removeBtn.addEventListener('click', () => {
        myLibrary.filter((book) => book.title !== title);
    })

    buttonGroup.appendChild(readBtn);
    buttonGroup.appendChild(removeBtn);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(buttonGroup);
    booksContainer.appendChild(bookCard);
}


function showBooks() {
    for(let i = 0; i < myLibrary.length; ++i) {

    }
}