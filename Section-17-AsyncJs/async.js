const button = document.querySelector("button");
let promiseState;

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};


const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done \n");
      // promiseState = promise;
    }, duration);
  });
  // console.log(promise);
  return promise;
};

function trackUser() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimer(2000).then((res) => {
        console.log(res, posData);
        console.log(promiseState);
      });
    },
    (error) => {
      console.log(error);
    }
  );
  setTimer(0).then((res) => {
    console.log("timer done");
  });
  console.log('getting position...');
}


function trackUserHandler() {
  let positionData;
  getPosition()  // pending
  .then((posData) => {  // resolved
    positionData = posData;
    return setTimer(2000);  // Back to pending
  })
  .catch(err => {   // To cancel the execution of the next 'then' block, use catch at the end.
    console.log(err);
    positionData = new Error('position could not be fetched');
    return 'ERROR: ' // auto resolved. after return. 
  })
  .then(data => {  // resolved
    console.log(data, positionData.message || positionData);
  });

  
  
  setTimer(1000).then(() => {
    console.log("Timer done");
  });
  console.log("getting user location...");
}

button.addEventListener("click", trackUserHandler);

// let res = 0;
// for (let index = 0; index < 100000000; index++) {
//     res += index;
// }
// console.log(res);
