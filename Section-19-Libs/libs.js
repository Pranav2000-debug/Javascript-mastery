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
    body: data
    // body: JSON.stringify(data),
    // headers: {
    //   "Content-Type": "application/json",
    // },
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

// --------FETCHING DATA using AXIOS-----------
async function fetchPosts() {
  let responseData;
  let listOfPosts;
  try {
    responseData = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(responseData);
    listOfPosts = responseData.data;
  } catch (err) {
    console.log(err);
    console.log(err.message);
    console.log(err.response.data); // handled
    console.log(err.response.status); // handled
    console.log(err.code);
    console.log(err.name);
    return;
  }

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
  const fd =  new FormData(form);
  fd.append('userID', userId);
  axios.post("https://jsonplaceholder.typicode.com/posts", fd);

//   sendHttpReq("POST", "https://jsonplaceholder.typicode.com/posts", post);
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
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }
});
