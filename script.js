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
	myLibrary.push(newBook); 
} 

addBookToLibrary(grit);
addBookToLibrary(guilt);
addBookToLibrary(first);

function cardMaker() {
	
}

function displayOnScreen() { 
	for (i = 0; i < myLibrary.length; i++) {

		let	card = document.createElement("div");
		let title = document.createElement("h2");
		let author = document.createElement("h2");
		let pages = document.createElement("p");
		let readingStats = document.createElement("p");
		
		card.className = "card";
		
		title.textContent = `Title: ${myLibrary[i].title}`;
		author.textContent = `Author: ${myLibrary[i].author}`;
		pages.textContent = `Pages: ${myLibrary[i].pages}`;
		readingStats.textContent = `Read: ${myLibrary[i].readingStats}`;

		card.appendChild(title);
		card.appendChild(author);
		card.appendChild(pages);
		card.appendChild(readingStats);
		container.appendChild(card);
	}
}

function submitInputs() {
	if (container != "") {
		for (i = 0; i < myLibrary.length; i++) {
		container.removeChild(card);
		}
	}
	 
 	let a = title.value;
 	let b = author.value;
 	let c = pages.value;
 	let d = readingStats.value;
	if (a == "" || b == "" || c == "" || d == "") {
		return;
	}else {
		let newBook = new Book(a,b,c,d);
		addBookToLibrary(newBook);
	}

	inputForm.classList.add("removeForm");
	body.style.backgroundColor = "#faf3e0";
}

function addNewBook() { 
	inputForm.classList.remove("removeForm");
	body.style.backgroundColor = "#1e212d";
}

addBook.addEventListener("click", addNewBook);
submitBtn.addEventListener("click", submitInputs);


displayOnScreen();