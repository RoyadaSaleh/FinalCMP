import { Typography, Form, Input, Button } from 'antd';

 const { Text } = Typography;

 const LeftForm = (props) => {
     const [form] = Form.useForm();
     const onFinish = (values) => {
        const n_recipe = {
             // eslint-disable-next-line react/prop-types
             id: props.len(),
             title: values.title,
             directions: values.directions,
             ingredients: values.ingredients
         }
         props.updateRecipe(n_recipe)
         form.resetFields();
     };
     return (
         <Form form={form} style={{ backgroundColor: 'white' }} onFinish={onFinish}>
             <Text style={{ textAlign: 'center', display: 'block', fontSize: 'large', fontWeight: 'bold' }}>
                 Add Your Own Recipe
             </Text>
             <Form.Item rules={[{ required: true, message: 'Please input your Title!' }]} label="Title" name="title" labelCol={{ span: 24 }} style={{ fontWeight: 'bold' }}>
                 <Input placeholder="Enter Title of Recipe" style={{ padding: '.6rem' }} />
             </Form.Item>
             <Form.Item rules={[{ required: true, message: 'Please input your Ingredients!' }]} label="Ingredients" name="ingredients" labelCol={{ span: 24 }} style={{ fontWeight: 'bold' }}>
                 <Input.TextArea rows={5} placeholder="Enter Ingredients of Recipe" style={{ padding: '.6rem', resize: 'none' }} />
             </Form.Item>
             <Form.Item rules={[{ required: true, message: 'Please input your Directions!' }]} label="Directions" name="directions" labelCol={{ span: 24 }} style={{ fontWeight: 'bold' }}>
                 <Input.TextArea rows={5} placeholder="Enter Directions of Recipe" style={{ padding: '.6rem', resize: 'none' }} />
             </Form.Item>
             <Form.Item>
                 <Button type="primary" htmlType='submit'>Add Recipe</Button>
             </Form.Item>
         </Form>
     );
 };

 export default LeftForm;