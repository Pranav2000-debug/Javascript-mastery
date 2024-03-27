// ----------- Selecting elements and nodes----------------
/* const h1 = document.getElementById('h1');

const body = document.body;
const list1 = body.querySelector('li');

list1.style.color = 'red';
const li = document.querySelector('li:last-of-type');
li.textContent = 'Changed text';

const listElements = document.getElementsByTagName('li')[0];
console.dir(listElements);

const ul = document.querySelector('ul');
console.log(ul.childNodes);
console.log(ul.children);

const li = document.querySelector('li');
const parentElement = li.parentNode;
console.log(parentElement);
console.log(li.closest('body'));

siblings
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling); */

// ------------Styling------------------
const section = document.querySelector("section");
const button = document.querySelector("button");

// section.style.backgroundColor = 'lightblue';
// section.className = "red-bg";

button.addEventListener("click", () => {
//   if (section.className === "red-bg visible") {
//     section.className = "red-bg invisible";
//   } else {
//     section.className = "red-bg visible";
//   } OR->
    section.classList.toggle('invisible');
});

const ul = document.querySelector('ul');
const firstLi = ul.firstElementChild;
/* shows moving of the selected elements instead of copying */
// ul.appendChild(firstLi);


const newLi = document.createElement('li');
newLi.textContent = 'Item 4';
ul.appendChild(newLi);

const newLi2 = document.createElement('li');
newLi2.textContent = 'Item 5';
ul.prepend(newLi2);
ul.lastElementChild.before(newLi2);
// ul.lastElementChild.replaceWith(newLi2);


// TO ADD NEW ELEMENT AFTER A SPECIFIC ELEMENT AND NOT AT THE END OR AT THE BEGINNING AND NOT USE APPEND() OR PREPEND(), AFTER(), BEFORE() -> USE :-
const secondElement = ul.children[2];
// console.log(secondElement);
const newLi3 = document.createElement('li');
newLi3.textContent = 'New element';
secondElement.insertAdjacentElement("afterend", newLi3);


// CLONING------
const clonedNewLi2 = newLi2.cloneNode(false);
clonedNewLi2.textContent = 'clonedNode Item 5';
ul.appendChild(clonedNewLi2);


// NON LIVE (static) NODE VS LIVE NODE-------------

const LiElements = ul.querySelectorAll('li');
console.log(LiElements);

const liElements2 = ul.getElementsByTagName('li');
console.log(liElements2);

console.log("after adding");
const addLi = document.createElement('li');
addLi.textContent = 'added this';
ul.append(addLi);
console.log(liElements2);
console.log(LiElements);


// REMOVING ELEMENTS --------------

// ul.remove();
// ul.parentElement.removeChild(ul); // Supports all browsers.