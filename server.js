var app = require('express')()

app.get('/' , function (req , res) {
    res.send('My first API')
})
app.get('/todos' , function (req , res) {
    res.send('Welcome!!! Temitope')
})

app.post('/todos', function (req, res) {
    var todo = req.body
    if(!todo) {
        res.status(500).send({error : "your update todo is empty"})
    } else{
        todos.push(todo)
        res.status(200).send(todos)
    }
})

app.listen(3000 , function () {
    console.log('First API running on PORT 3000')
})