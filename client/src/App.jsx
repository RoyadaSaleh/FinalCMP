import Form from './components/Form'
import { Layout, Row, Col, Divider } from 'antd';
import Items from './components/Items';
import { useEffect, useState } from 'react';

function App() {
  const [recipes, setRecipe] = useState([]);

  const len = () => recipes.length;
   const updateRecipe = (n_recipe) => {
     console.log('hello')
     setRecipe([...recipes, n_recipe])
   }

  const getRecipes = async () => {
    try {
      const response = await fetch('/api/recipes')
      const data = await response.json()
      const n_data = data['rows'].map((recipe) => {
        return {
          ingredients: recipe.ingredients,
          directions: recipe.directions,
          title: recipe.title,
          id: recipe.id
        }
      })
      setRecipe(n_data)
    } catch (e) {
      console.log(e)
    }
  }
   useEffect(() => {
     getRecipes()
   }, []);

  return (
    <Layout>
       <Row justify="space-evenly" style={{ backgroundColor: 'white' }} >
       <Col span={6} style={{ padding: '.5rem 1.5rem', }} ><Form len={len} updateRecipe={updateRecipe} /></Col>
         <Col ><Divider type='vertical' style={{ height: '100dvh' }}></Divider></Col>
         <Col span={17} ><Items recipe={recipes} /></Col>
       </Row>
     </Layout>
  )
}.

export default App
