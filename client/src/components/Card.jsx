import { Card, Divider } from 'antd';


 function ItemCard(props) {
     return (
         <Card title={props.title} type="inner">
             <Divider style={{ fontWeight: 'bold' }}>Ingredients</Divider>
             <p>{props.ingredients}</p>
             <Divider style={{ fontWeight: 'bold' }}>Directions</Divider>
             <p>{props.directions}</p>
         </Card>
     );
 }

 export default ItemCard