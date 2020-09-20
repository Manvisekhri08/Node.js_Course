setTimeout(() => {
        console.log("After 2 seconds")
}, 2000)

const names = ['Mike', 'Toby', 'Tommy', 'Tom', 'Mark']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
          latitude: 0,
          longitude: 0,
        };
        callback(data);
    }, 3000)
}

geoCode('Chandigarh', (data) => {
    console.log(data)
})

// ASSIGNMENT :-

const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1+num2)
    },2000)
}

add(1, 4, (sum) => {
    console.log(sum);
})