import React from 'react';
import Form from 'react-bootstrap/Form';

const PostProviderForm = ({formValues,setFormValues}) => {
  
  const handleFormValue = (e) => setFormValues({...formValues, [e.target.name]:e.target.value});

  return (
    <>
      <Form.Group  controlId="validationCustom01">
        <Form.Label>title</Form.Label>
        <Form.Control
          name='title'
          required
          type="text"
          placeholder="Add title."
          onChange={handleFormValue}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group  controlId="validationCustom02">
        <Form.Label>body</Form.Label>
        <Form.Control
          as={'textarea'}
          row={4}
          name='body'
          required
          type="text"
          placeholder="body..."
          onChange={handleFormValue}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </>
  )
}

export default PostProviderForm