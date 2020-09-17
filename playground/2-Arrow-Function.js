// const square = function (x) {
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(3))

const event = {
    name: 'BirthDay party!',
    guestList: ['Thomas', 'Zayn', 'Post'],
    printGuestList() {
        console.log('Guest for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest+ ' is attending ' + this.name)
        })
    }
}

event.printGuestList()