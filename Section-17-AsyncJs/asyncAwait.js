const button = document.querySelector("button");

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

const setTimer = (duration = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`done after: ${duration / 1000} seconds`);
      // promiseState = promise;
    }, duration);
    if (duration > 5000) {
      reject("overtime");
    }
  });
  // console.log(promise);
  return promise;
};

async function trackUserHandler() {
  let posData, timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(3000);
  } catch (err) {
    console.log(err);
  }
  console.log(timerData, posData);

  // const posData = await getPosition();
  // const timerData = await setTimer(2000);
  // console.log(timerData, posData);
  // console.log("async");

  //   let positionData;
  //   getPosition()  // pending
  //   .then((posData) => {  // resolved
  //     positionData = posData;
  //     return setTimer(2000);  // Back to pending
  //   })
  //   .catch(err => {   // To cancel the execution of the next 'then' block, use catch at the end.
  //     console.log(err);
  //     positionData = new Error('position could not be fetched');
  //     return 'ERROR: ' // auto resolved. after return.
  //   })
  //   .then(data => {  // resolved
  //     console.log(data, (positionData.message || positionData));
  //   });
}

button.addEventListener("click", trackUserHandler);
