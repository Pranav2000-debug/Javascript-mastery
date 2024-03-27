const btn = document.querySelector("button");

// const getPromise = function() {
//     return new Promise((resolve, reject) => {
//     console.log("Promise");
//         resolve('success');
//         // reject('network error');
//     });
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log('rejected', err);
// });

function eventHandler() {
  function asyncFunc() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log("some data 1");
        res("success");
      }, 3000);
    });
  }
	function asyncFunc2() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log("some data 2");
        res("success");
      }, 3000);
    });
  }

  // console.log("fetching data 1...");
  // const p1 = asyncFunc();
  // p1.then((res) => {
  //   console.log(res);
  // });
	// -----working parallel-----
	// console.log("fetching data 2...");
  // const p2 = asyncFunc2();
  // p2.then((res) => {
  //   console.log(res);
  // });

	console.log('fetching data 1....');
	const p1 = asyncFunc();
	p1.then((res) => {
		console.log('fetching data 2...');
		const p2 = asyncFunc2();
		p2.then((res) => {
			console.log(res);
		});
	})
}
btn.addEventListener("click", eventHandler);
