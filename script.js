let container = document.querySelector(".container");
let addBook = document.querySelector(".addBook");


let myLibrary = [];

function Book(title, author, pages, readingStats) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readingStats = readingStats;
	this.info = function () {
		let bookInfo = ` ${title} \n ${author} \n ${pages} \n ${readingStats}`;
		return bookInfo;
	}
}


let grit = new Book("Grit", "Angela Dukworth", "200", "Yes");
let guilt = new Book("Grit", "Angela Dukworth", "200", "Yes");

let first = new Book("Grit", "Angela Dukworth", "200", "Yes");


function addBookToLibrary() {
	myLibrary.push(grit);
	myLibrary.push(guilt);
	myLibrary.push(first);
	return myLibrary;
}

function displayOnScreen() {

	for (i = 0; i < myLibrary.length; i++) {

		let card = document.createElement("div");
		let title = document.createElement("h2");
		let author = document.createElement("h2");
		let pages = document.createElement("p");
		let readingStats = document.createElement("p");
		
		card.className = "card";
		
		title.textContent = `Title: ${myLibrary[i].title}`;
		author.textContent = `Author: ${myLibrary[i].author}`;
		pages.textContent = `Pages: ${myLibrary[i].pages}`;
		readingStats.textContent = `Read: ${myLibrary[i].readingStats}`;

		container.appendChild(card);
		card.appendChild(title);
		card.appendChild(author);
		card.appendChild(pages);
		card.appendChild(readingStats);
	}
}

function addNewBook() {
	
}

addBook.addEventListener("click", addNewBook);

addBookToLibrary();
displayOnScreen();


