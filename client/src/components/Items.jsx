import { Row, Col, Divider } from 'antd';

 function Items(props) {
     return (
         <>
             <main style={{ padding: '1rem', height: '100dvh', overflowY: 'scroll' }}>
                 <Row justify='center' gutter={24} >
                     <Col span={24}></Col>
                 </Row>
                 <Divider></Divider>
             </main>
         </>
     );
 }


 export default Items; 