const express = require('express')

const path = require('path')

const app = express()

const publicDirectory = path.join(__dirname, "../public");

app.set('view engine', 'hbs')

app.use(express.static(publicDirectory));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Manvi Sekhri'
    })
})

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    name: "Manvi Sekhri",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "Manvi Sekhri",
  });
});

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