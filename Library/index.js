class Book {
  constructor(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }
}

Book.prototype.toggleRead = function (id) {
  const book = myLibrary.find((book) => book.id === id);
  if (book) {
    book.read = !book.read;
    refreshBooks();
  }
  console.log(myLibrary);
};

let ID = 0;

let myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien", 295, true, ID++)];
myLibrary.push(new Book("1984", "George Orwell", 328, true, ID++));
myLibrary.push(
  new Book("To Kill a Mockingbird", "Harper Lee", 281, false, ID++)
);
myLibrary.push(
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true, ID++)
);
myLibrary.push(new Book("Moby Dick", "Herman Melville", 720, false, ID++));

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit");
const tableBody = document.getElementById("book-list-body");

refreshBooks();

function addBookToLibrary() {
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    read.checked,
    ID++
  );
  myLibrary.push(newBook);

  refreshBooks();
}

function refreshBooks() {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.lastChild);
  }

  myLibrary.forEach((book) => {
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = tableBody.insertRow(-1);

    var deleteButton = `<button class="delete-button" onclick="deleteBook(${book.id})"><i class="mdi mdi-delete"></i></button>`;
    var readButton = `<button class="read-button ${
      book.read ? "yes" : "no"
    }" onclick="Book.prototype.toggleRead(${book.id})">${
      book.read ? "Yes" : "No"
    }</button>`;

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Add some text to the new cells:
    cell1.innerHTML = book.title;
    cell2.innerHTML = book.author;
    cell3.innerHTML = book.pages;
    cell4.innerHTML = readButton;
    cell5.innerHTML = deleteButton;

    // Add classes to the cells
    cell1.className = "book-title";
    cell2.className = "book-author";
    cell3.className = "book-pages";
    cell4.className = "book-read";
    cell5.className = "book-delete";
  });
}

function deleteBook(index) {
  console.log("removeingIndex", index);
  myLibrary = myLibrary.filter((book) => book.id !== index);
  console.log(myLibrary);
  refreshBooks();
  console.log(myLibrary);
}
