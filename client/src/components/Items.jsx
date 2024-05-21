import { Row, Col, Divider } from 'antd';
import ItemCard from './Card';

 function Items(props) {

    const Rows = props.recipe.map((x) => {
        return (
            <>
                <Row justify='center' gutter={24} key={x.id}>
                    <Col span={24}><ItemCard ingredients={x.ingredients} directions={x.directions} title={x.title} /></Col>
                </Row>
                <Divider></Divider>
            </>
        )
    })
     return (
         <>
             <main style={{ padding: '1rem', height: '100dvh', overflowY: 'scroll' }}>
             {Rows}
             </main>
         </>
     );
 }


 export default Items; 