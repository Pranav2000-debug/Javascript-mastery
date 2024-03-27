const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const userInputs = document.querySelector("section").querySelectorAll("input");
const movieList = document.getElementById("movie-list");

const movies = [];

function clearInputs() {
  for (const uInput of userInputs) {
    uInput.value = "";
  }
}
function addMovieHandler() {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (!title.trim() || !extraName.trim() || !extraValue.trim()) {
    return;
  }

  const newMovie = {
    infor: {
      title: title,
      [extraName]: extraValue,
    },
    getFormattedString: function () {
      console.log(this);
      return this.infor.title.toUpperCase(); // EXAMPLE OF USING this KEYWORD. Shorthand; we can use getFormattedString(){}. and remove ':'
    },
    id: Math.random().toString(),
  };

  // ----GETTER AND SETTER EXAMPLE---------- with try and catch
  // const newMovie = {
  //   id: Math.random().toString(),
  //   info: {
  //     set title(val){
  //       try{
  //         if(val.trim() !== ''){
  //           this._title = val;
  //         } else{
  //           throw new Error("title cannot be empty");
  //         }
  //       }
  //       catch(err){
  //         alert(err.message);
  //         return;
  //       }
  //     },
  //     get title(){
  //       return this._title;
  //     },
  //     [extraName]: extraValue,
  //   },
  //   getFormattedString: function () {
  //     if(!this.info.title){
  //       return;
  //     }
  //     console.log(this);
  //     return this.info.title.toUpperCase(); // EXAMPLE OF USING this KEYWORD. Shorthand; we can use getFormattedString(){}. and remove ':'
  //   }
  // };
  // newMovie.info.title = title;
  // console.log(newMovie.info.title);
  movies.push(newMovie);
  // renderMoviesHandler(newMovie.info.title, extraName, newMovie.info[extraName]);
  renderMoviesHandler();
  console.log(movies);
  clearInputs();
}

// function renderMoviesHandler(movieTitle, UserExtraName, UserExtraValue) {
//   if (movies.length === 0) {
//     movieList.classList.remove("visible");
//     return;
//   } else {
//     movieList.classList.add("visible");
//   }
// movieList.innerHTML = '';
// movies.forEach((movie) => {
// 	const movieElement = document.createElement('li');
// 	movieElement.textContent = movie.info.title;
// 	movieList.append(movieElement);
// });
//   const newMovieElement = document.createElement("li");
//   newMovieElement.innerHTML = `${movieTitle} - ${UserExtraName} : ${UserExtraValue}`;
//   movieList.append(newMovieElement);
// }

function renderMoviesHandler(filterExpression = "") {
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  const filteredMovies =
    filterExpression === ""
      ? movies
      : movies.filter((element) => {
          return element.info.title.includes(filterExpression);
        });

  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("li");
    const { infor, ...otherProps } = movie; // object desturcturing.
    // const {title:newName} = info;
    // console.log(title);
    // console.log(info);
    // let text = info.title + ' - ';

    // let text = movie.getFormattedString() + ' - '; // method in the movie object; refer to the newMovie object in addMovieHandler
    // if we use object destructuring. #####
    let { getFormattedString } = movie;
    // getFormattedString = getFormattedString.bind(movie);  // first arg, thisArg. // here bind is replaced with call() (explained in the book)
    let text = getFormattedString.call(movie) + " - "; // here bind is replaced with call() (explained in the book)
    for (const property in infor) {
      // checking for the string value i.e the key, if we use title then it checks the val.
      if (property !== "title" && property !== '_title') {
        text = text + `${property}:${infor[property]}`;
      }
    }
    movieElement.textContent = text;
    movieList.append(movieElement);
  });
}
function searchMovieHandler() {
  console.log(this);
  const filterTerm = document.getElementById("filter-title").value;
  renderMoviesHandler(filterTerm);
}

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
