const Pool = require('pg').Pool
 const pool = new Pool(
     {
         user: 'nr',
         host: 'localhost',
         database: 'recipe',
         password: '12345678',
         port: 5432,
     })

 const getRecipe = (req, res) => {
     pool.query('SELECT * FROM recipe ORDER BY id ASC', (error, result) => {
         if (error) {
             throw error
         }
         return res.status(200).json(result)
     })
 }

 const createRecipe = (req, res) => {
     const title = req.body.title
     const ingredients = req.body.ingredients
     const directions = req.body.directions
     pool.query('INSERT INTO recipe(title, ingredients, directions) VALUES($1, $2) RETURNING id', [title, ingredients, directions], (error, result) => {
         if (error) {
             throw error
         }
         return res.status(204).json(result)
     })
 }

 const deleteRecipe = (req, res) => {
     const id = req.params.id
     pool.query('DELETE FROM recipe WHERE id=$1', [id], (error, result) => {
         if (error) {
             throw error
         }
         return res.status(200).json(result)
     })
 }

 module.exports = {
     getRecipe,
     createRecipe,
     deleteRecipe
 }