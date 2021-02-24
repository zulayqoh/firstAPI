var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var ingredients = [
    { "id": "22kh", "text": "Eggs" },
    { "id": "g477", "text": "Beans" },
    { "id": "ywb3", "text": "Fish" },
    { "id": "gj37", "text": "Shrimps" },
    { "id": "gt98", "text": "Milk" },
    { "id": "re37", "text": "Bacon" }
]

app.get('/', function (req, res) {
    res.send('My first API')
})

app.get('/ingredients', function (req, res) {
    res.send(ingredients)
})

app.post('/ingredients', function (req, res) {
    var ingredient = req.body
    if (ingredient.text === "") {
        res.status(500).send({ error: "your update ingredient is empty" })
    } else {
        ingredients.push(ingredient)
        res.status(200).send(ingredients)
    }
})

app.listen(3000, function () {
    console.log('First API running on PORT 3000')
})