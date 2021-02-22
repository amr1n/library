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

function displayOnScreen() { 
		container.textContent = " ";

		myLibrary.forEach(element => {
			let	card = document.createElement("div");
			let title = document.createElement("h2");
			let author = document.createElement("p");
			let pages = document.createElement("p");
			let readingStats = document.createElement("button");
			let removeBook = document.createElement("button");

			removeBook.classList.add("removeBook");
			readingStats.classList.add("readingStats");
			card.classList.add("card");

			title.textContent = element.title;
			author.textContent = element.author;
			pages.textContent = element.pages;
			readingStats.textContent = element.readingStats;
			removeBook.textContent = "Remove";

			removeBook.dataset.ID = myLibrary.indexOf(element);
			readingStats.dataset.ID = myLibrary.indexOf(element);
			removeBook.addEventListener("click", remove);
			readingStats.addEventListener("click", stats);

			card.appendChild(title);
			card.appendChild(author);
			card.appendChild(pages);
			card.appendChild(readingStats);
			card.appendChild(removeBook);
			container.appendChild(card);

		});

} 

function submitInputs() { 
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
	displayOnScreen();

	inputFild.forEach(input => input.value = "");

	wrapper.classList.remove("removeContent");
	inputForm.classList.add("removeForm");
	body.style.backgroundColor = "#faf3e0";
}

function addNewBook() {
	wrapper.classList.add("removeContent");
	inputForm.classList.remove("removeForm");
	body.style.backgroundColor = "#1e212d";
}

function remove(element) {
	myLibrary.splice(element.target.dataset.ID, 1);
	displayOnScreen();
}

function stats() {

}

addBook.addEventListener("click", addNewBook);
submitBtn.addEventListener("click", submitInputs);

addBookToLibrary(grit);
addBookToLibrary(guilt);
addBookToLibrary(first);
displayOnScreen();

