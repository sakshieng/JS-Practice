/**
 * @param {number} millis
 */
let t = Date.now();
async function sleep(millis) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, millis);
    });
    
  let response = await promise;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */