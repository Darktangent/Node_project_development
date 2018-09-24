const express = require('express')
const hbs = require('hbs')
var app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: "Welcome to the home page"
    })
    // res.send('<h1>Hello Express</h1>')
    // res.send({
    //     name: 'Rohan',
    //     likes: [
    //         'Biking',
    //         'swimming'
    //     ]
    // })
})
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'ABOUT PAGE',
        currentYear: new Date().getFullYear()
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "Unable to resolve request"
    })
})


app.listen(3000, () => {
    console.log('Server is up in port 3000')
})