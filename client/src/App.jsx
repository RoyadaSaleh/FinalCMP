import Form from './components/Form'
import { Layout, Row, Col, Divider } from 'antd';
import { useEffect, useState } from 'react';

function App() {
  const [recipes, setRecipe] = useState([]);
  const getRecipes = async () => {
    try {
      const response = await fetch('/api/recipes')
      const data = await response.json()
      const n_data = data['rows'].map((x) => {
        return {
          ingredients: x.ingredients,
          directions: x.directions,
          title: x.title,
          id: x.id
        }
      })
      setRecipe(n_data)
    } catch (e) {
      console.log(e)
    }
  }

  const len = ()=> recipes.length;
   const updateRecipe = (n_recipe) => {
     console.log('hello')
     setRecipe([...recipes, n_recipe])
   }
   useEffect(() => {
     getRecipes()
   }, []);

  return (
    <Layout>
       <Row justify="space-evenly" style={{ backgroundColor: 'white' }} >
       <Col span={6} style={{ padding: '.5rem 1.5rem', }} ><Form len={len} updateRecipe={updateRecipe} /></Col>
         <Col ><Divider type='vertical' style={{ height: '100dvh' }}></Divider></Col>
       </Row>
     </Layout>
  )
}

export default App
