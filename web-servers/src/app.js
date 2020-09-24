const express = require('express')

const path = require('path')

const app = express()

const publicDirectory = path.join(__dirname, "../public");

app.use(express.static(publicDirectory));

// app.get('', (req, res) => {
//     res.send('<h1>hello express!</h1>')  // html
// })

// app.get("help.html", (req, res) => {
//     res.send({                         // json
//         name: 'Manvi',
//         age: 20
//   });
// });

// app.get("about.html", (req, res) => {
//   res.send("<h1>About</h1>");
// });

app.get("/weather", (req, res) => {
    res.send([{
        forecast: 'Cloudy'
    }, {
        location: 'Pasadena'
    }]);                  // arry of objects
});

app.listen(3000, () => {
    console.log('SErver is up on port 3000!')
})