let body = document.querySelector("body");
let container = document.querySelector(".container");
let addBook = document.querySelector(".addBook");
let wrapper = document.querySelector(".wrapper");
let inputForm = document.querySelector(".inputForm");
let inputFild = Array.from(document.querySelectorAll(".input"));
let submitBtn = document.querySelector(".submit");
let greet = document.querySelector("h1");

let [title, author, pages, readingStats] = inputFild;
let myLibrary = [];

function Book(title, author, pages, readingStats) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readingStats = readingStats; 
}


let grit = new Book("Grit", "Angela Dukworth", "200", "Yes");
let guilt = new Book("Grit", "Angela Dukworth", "200", "Yes");
let first = new Book("Grit", "Angela Dukworth", "200", "Yes"); 

function addBookToLibrary(newBook) {
	myLibrary.push(grit);
	myLibrary.push(guilt);
	myLibrary.push(first);
	myLibrary.push(newBook);
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

function submitInputs() {
	title = title.value;
	author = author.value;
	pages = pages.value;
	readingStats = readingStats.value;

	if (title == undefined || author == undefined || pages == undefined || readingStats == undefined) {
		return;
	}else {
		let newBook = new Book(title, author, pages, readingStats);
		addBookToLibrary(newBook);
	}
	
	displayOnScreen();
	wrapper.classList.remove("removeContent");
	inputForm.classList.add("removeForm");
	body.style.backgroundColor = "#faf3e0";
}

function addNewBook() {
	wrapper.classList.add("removeContent");
	inputForm.classList.remove("removeForm");
	body.style.backgroundColor = "#1e212d";
}

addBook.addEventListener("click", addNewBook);
submitBtn.addEventListener("click", submitInputs);


