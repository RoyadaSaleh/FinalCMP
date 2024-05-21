const express = require('express') 
const path = require('path')
const app = express();
const PORT = 5000

const db = require('./db')
 app.use(express.json());

 app.get('/api/recipes', db.getRecipe)

//Create Links
app.post('/api/recipes', db.createRecipe)

//Delete Links
app.delete('/api/recipes/:id', db.deleteRecipe)

//Start Server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})