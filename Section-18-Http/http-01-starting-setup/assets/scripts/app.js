const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchBtn = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

// Full format of xhr and xml request handling
function sendHttpReq(method, url, data) {
  // const promise = new Promise((resolve, reject) => {

  /*  XML */
  // const xrs = new XMLHttpRequest(); // async code
  // xrs.open(method, url);
  // // handling non success status codes. 404. We do send a request and get back a response. which could be an error or a success response
  // // xrs.responseType = 'json'; or parse it later after fetching
  // xrs.onload = () => {
  //   if (xrs.status >= 200 && xrs.status < 300) {
  //     resolve(xrs.response); // response data
  //   } else {
  //     reject(new Error("something went wrong"));
  //   }
  // };
  // // this only kicks in if there is a network error. Failed to send request.
  // xrs.onerror = () => {
  //   reject(xrs.response);
  // };
  // xrs.send(JSON.stringify(data));
  // });
  // return promise;

  // REQUEST OBJECT TRIAL
  const myRequest = new Request(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  /* FETCH API */
  return fetch(myRequest);

  // return fetch(url, {
  //   method: method,
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }); // get request .. returns a promise
}

// --------FETCHING DATA-----------
async function fetchPosts() {
  let responseData;
  let listOfPosts;
  try {
    responseData = await sendHttpReq(
      "GET",
      "https://jsonplaceholder.typicode.com/psts"
    ); // wait for the response, then move on. returns a promise: resolved or rejected - data which is an Response Object
    // ERROR HANDLING FOR FETCH()
    if (responseData.ok) { // or (response.status >= 200 && response.status < 300)
      listOfPosts = await responseData.json(); // .json also returns a promise with the data as resolved state, so we await // here we get the resolved response body. Normal JS object
    } else {
      // Displaying more info sent from the server. 
      let errorData = null;
      try {
        errorData = await responseData.json(); // here we get the error body information. 
      } catch (err) {
        console.log("ERROR parsing data", err);
      }
      throw new Error(`Status Code: ${responseData.status}.
      ERROR DATA: ${JSON.stringify(errorData) || "no additional error provided"}`);
    }
  } catch (err) {
    console.log(err.message);  // handled
    return;
  }

  /* part of XML procedure. remove listOfPosts from top and continue below. */

  // const listOfPosts = JSON.parse(responseData); // JSON DATA parsed to normal array like type. Objects with normal Keys.
  // console.log(listOfPosts);

  // removing prev children on click of multiple fetch post btn
  if (listElement.children.length > 0) {
    while (listElement.firstChild) {
      listElement.removeChild(listElement.firstChild);
    }
    console.log("previous deleted");
  }
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.id;
    listElement.append(postEl);
  }
}

// -------CREATING/SENDING DATA----------
async function createPost(title, content) {
  let max = 10;
  let min = 0;
  const userId = Math.floor(Math.random() * (max - min + 1) + min);

  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHttpReq("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchBtn.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputTitle = event.currentTarget.querySelector("#title").value;
  const inputContent = event.currentTarget.querySelector("#content").value;
  createPost(inputTitle, inputContent);
});

// DELETING using event delegation
postList.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpReq(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});

