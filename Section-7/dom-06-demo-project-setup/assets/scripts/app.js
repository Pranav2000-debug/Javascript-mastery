const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("header button");
const backDrop = document.getElementById("backdrop");
const enteryTextSection = document.getElementById("entry-text");
const movieList = document.getElementById("movie-list");

const deleteModal = document.getElementById("delete-modal");
const cancelDeleteBtn = deleteModal.querySelector(".btn--passive");

const cancelAddModalBtn = addMovieModal.querySelector(".btn--passive");
const confirmAddModalBtn = cancelAddModalBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");

// movies object array
const movies = [];

function updateUI() {
  if (movies.length === 0) {
    enteryTextSection.style.display = "block";
  } else {
    enteryTextSection.style.display = "none";
  }
}
function toggleBackdrop() {
  backDrop.classList.toggle("visible");
}
function closeMovieModal() {
  addMovieModal.classList.remove("visible");
}
function toggleVisible() {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
}
function clearMovieInputs() {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
}
function backdropClickHandler() {
  closeMovieModal();
  clearMovieInputs();
  cancelMovieDeletion();
}
function cancelAddMovieHandler() {
  closeMovieModal();
  clearMovieInputs();
  toggleBackdrop();
}

// ---------------ADDING---------------
function addMovieHandler() {
  const titleValue = userInputs[0].value;
  const imageURLValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    !titleValue.trim() ||
    !imageURLValue.trim() ||
    !ratingValue.trim() ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Enter Valid Values");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageURLValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  updateUI();
  toggleBackdrop();
  renderMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  clearMovieInputs();
}

//--------------------DELETION--------------------
function cancelMovieDeletion() {
  toggleBackdrop();
  deleteModal.classList.remove("visible");
}
function deleteMovieConfirmation(movieId) {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  //   UI updating after deletion
  movieList.children[movieIndex].remove();
  updateUI();
  cancelMovieDeletion();
}
function deleteMovieHandler(movieId) {
  deleteModal.classList.add("visible");
  toggleBackdrop();
  
  let yesDeleteBtn = cancelDeleteBtn.nextElementSibling;
  yesDeleteBtn.replaceWith(yesDeleteBtn.cloneNode(true));
  yesDeleteBtn = cancelDeleteBtn.nextElementSibling;

  cancelDeleteBtn.removeEventListener('click', cancelMovieDeletion);
  cancelDeleteBtn.addEventListener("click", cancelMovieDeletion);
  
  yesDeleteBtn.addEventListener(
    "click",
    deleteMovieConfirmation.bind(null, movieId)
  );

  // deleteMovieConfirmation(movieId);
}

// -----------------RENDERING IN THE DOC FLOW----------------
function renderMovieElement(id, title, imageUrl, rating) {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl} alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>     
    `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  movieList.append(newMovieElement);
}

// evenListeners
startAddMovieBtn.addEventListener("click", toggleVisible);
backDrop.addEventListener("click", backdropClickHandler);
cancelAddModalBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddModalBtn.addEventListener("click", addMovieHandler);
