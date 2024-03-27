// const btn1 = document.querySelector("button");
// // // button.onclick = function() {

// // // }; OR

// const buttonClickHandler = (event) => {
//   event.target.style.color = "black";
//   console.log(event);
//   setTimeout(() => {
//     event.target.style.color = "white";
//   }, 500);
//   console.log(this);
// };

// // {
// // // const anotherFunction = () => {
// // //     console.log('this was clicked');
// // // }

// // // button.onclick = buttonClickHandler;
// // // button.onclick = anotherFunction; // overwritting another function to the button. Can't add two listeners like this
// // }

// // // RECOMMENDED to use add and remove eventListeners
// // // const boundedFn = buttonClickHandler.bind(this);

// btn1.addEventListener("click", buttonClickHandler);

// // setTimeout(() => {
// //     btn1.removeEventListener('click', buttonClickHandler);
// // }, 2000);

// // window.addEventListener('scroll', event => {
// // //    event.target.body.style.backgroundColor = 'red';
// //     console.log(event);
// // });

// {
// // inifinte Scroll
// // let currElementNumber = 0;
// // const scrollHandler = (ev) => {
// //     console.log(ev);
// //     // const distanceToBottom = document.body.getBoundingClientRect().bottom;
// //     // if( distanceToBottom < document.documentElement + 150) {
// //     //     const newDataEl = document.createElement('div');
// //     //     currElementNumber++;
// //     //     newDataEl.innerHTML = `<p> Element ${currElementNumber} <p>`;
// //     //     document.body.append(newDataEl);
// //     // }
// // }

// // window.addEventListener('scroll', (ev) => {
// //     console.log(ev);
// // });
// }

// --------------------Default Behaviour of certain DOM ELEMENTS--------------------
// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(event);
// });

// // ---------------EVENT PROPOGATION-------------------
// const btn = document.querySelector('button');
// const div = document.querySelector('div');
// div.addEventListener('click', (ev) => {
//     console.log('CLICKED DIV');
//     console.log(ev);
// })    // true); // capturing behavior with true as an arg
// btn.addEventListener('click', (ev) => {
//     ev.stopPropagation();
//     console.log('CLICKED BUTTON');
//     console.log(ev);
// });

// const li = document.querySelectorAll("li");
// adding event listeners to all LiItems individually, bad performance.
// use the concept of bubbling (event delegation)
// for(const item of li){
//     item.addEventListener('click', (event) => {
//         console.log(event);
//         event.target.classList.toggle('highlight');
//     });
// }
// const form = document.querySelector("form");
// const formSubmitbtn = form.querySelector("button");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event);
// });

// ----------Event delagation using bubbling--------------
const list = document.querySelector("ul");
// list.addEventListener("click", (event) => {
  // console.log(event.target);

  // console.log(event.currentTarget); // element on which we added a listener.
  // // .target refers to the actual DOM element clicked

  // event.target.classList.toggle('highlight');
  // event.currentTarget.classList.toggle('highlight');
  // const closestElement = event.target.closest("li");
  // closestElement.classList.toggle("highlight");
  // // form.submit();
  // formSubmitbtn.click();
// });
