import React from 'react';
import {FormField, Form, Button} from "semantic-ui-react";

const PostAddForm = () => {
    return (
       <Form>
        <Form.Group>
            <Form.Input
                placeholder='Text...'
            />
            <Form.Button
            type='submit'  color='orange'>Add</Form.Button>
        </Form.Group>

       </Form>
    )
}

export default PostAddForm;