const { fetchData } = require('./http');

const button = document.querySelector('button');

const loadTitle = () => { // returns a promise returned by fetchData
  return fetchData().then(extractedData => { // returns a promise resolved with transformedTitle
    const title = extractedData.title;
    const transformedTitle = title.toUpperCase();
    return transformedTitle;
  });
};

const printTitle = () => {
  loadTitle().then(title => {
    console.log(title);
  });
};

button.addEventListener('click', printTitle);

exports.printTitle = printTitle;
