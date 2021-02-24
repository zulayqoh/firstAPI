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

app.put('/ingredients/:ingredientId', function (req, res) {
    var ingredientId = req.params.ingredientId
    var newIngredient = req.body.text
    if (newIngredient === "") {
        res.status(500).send({ error: "You must provide the new ingredient to update with" })
    } else {
        var objectFound = false
        for (var i = 0; i < ingredients.length; i++) {
            var food = ingredients[i]
            if (food.id === ingredientId) {
                ingredients[i].text = newIngredient
                objectFound = true
                break
            }
        }
        if (!objectFound) {
            res.status(500).send({ error: "Ingredient Id not found" })
        } else {
            res.send(ingredients)
        }
    }
})

app.delete('/ingredients/:ingredientId', function (req, res) {
    var unwantedingredientId = req.params.ingredientId
    if (unwantedingredientId === "") {
        res.status(500).send({ error: "You must provide the Id of ingredient that you do not want on the list" })
    } else {
        for (var i = 0; i < ingredients.length; i++) {
            var food = ingredients[i]
            if (food.id === unwantedingredientId) {
                ingredients.splice(i,1)
                break
            }
        } res.status(200).send(ingredients)
    }
})

app.listen(3000, function () {
    console.log('First API running on PORT 3000')
})