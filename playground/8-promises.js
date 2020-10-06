const doPromise =new Promise ((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 4, 2])
        reject('Err... Error!')
    }, 2000);
})

doPromise.then((result) => {
  console.log("Success ", result);
}).catch((error) => {
    if (error) {
        return console.log('Things went wrong! '+error);
    }
})

//                            fulfilled
//                         /
// Promise  -- pending --> 
//                         \
//                            rejected