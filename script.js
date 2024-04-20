const booksContainer = document.getElementById('books-container');
const addBookBtn = document.getElementById('add-btn');
const overlayFrame = document.getElementById('add-book-frame');
const overlaySubmitBtn = document.getElementById('submitBook');
const frameShadow = document.getElementById('shadow-div');
let activeOverlay = false;

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

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
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = "#9fff9c";
    }
    else {
        readBtn.textContent = "Not read";
        readBtn.style.backgroundColor = "#ff9c9c";
    }

    readBtn.addEventListener('click', () => {
        if(readBtn.textContent === "Not read") {
            readBtn.style.backgroundColor = "#9fff9c";
            readBtn.textContent = "Read";
            bk.read = true;
        }
        else {
            readBtn.style.backgroundColor = "#ff9c9c";
            readBtn.textContent = "Not read";
            bk.read = true;
        }
    })

    removeBtn.addEventListener('click', () => {
        const checkTitle = bk.title;
        myLibrary = myLibrary.filter((book) => book.title !== checkTitle);
        updateBooksGrid();
    })

    buttonGroup.appendChild(readBtn);
    buttonGroup.appendChild(removeBtn);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(buttonGroup);
    booksContainer.appendChild(bookCard);
}

function createBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const hasRead = document.getElementById('hasRead').checked;

    return new Book(title, author, pages, hasRead);
}

function resetBooksGrid() {
    booksContainer.innerHTML = '';
}

function updateBooksGrid() {
    resetBooksGrid();

    for(let book of myLibrary) {
        addBookToLibrary(book);
    }
}

addBookBtn.addEventListener('click', () => {
    overlayFrame.style.transform = 'scale(1)';
    frameShadow.style.display = 'block';
    frameShadow.style.opacity= '1';
})

function closeOverlay() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const hasRead = document.getElementById('hasRead');

    title.value = '';
    author.value = '';
    pages.value = '';
    hasRead.checked = false;

    overlayFrame.style.transform = 'scale(0)';
    frameShadow.style.opacity= '0';
    setTimeout(() => {
        frameShadow.style.display = 'none';
    }, 200)
}

frameShadow.addEventListener('click', closeOverlay)

overlaySubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newBook = createBook();

    myLibrary.push(newBook);
    updateBooksGrid();
    closeOverlay();
})

