const button = document.querySelector('button');
const textPara = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textPara.textContent;
  navigator.clipboard
    .writeText(text)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

// or 
/** async () => {
 * const text = textPara.textContent
 * try {
 *  const result = await navi.clip.writeText(text);
 *  log(res) 
 * }  catch(err) {
 *  log(err);
 * }
 * } 
*/