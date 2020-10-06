const doCallback = (callback) => {
    setTimeout(() => {
        // callback("This is the error", undefined)
        callback(undefined, [1, 5, 8]);
    }, 2000)
}

doCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})