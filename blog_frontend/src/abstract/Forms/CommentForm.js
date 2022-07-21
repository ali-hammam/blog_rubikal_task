import React from 'react';
import Form from 'react-bootstrap/Form';

const CommentForm = ({formValues,setFormValues}) => {

  const handleFormValue = (e) => setFormValues({...formValues, [e.target.name]:e.target.value});

  return (
    <>
      <Form.Group  controlId="validationCustom02">
        <Form.Label>comment</Form.Label>
        <Form.Control
          as={'textarea'}
          row={4}
          name='comment'
          required
          type="text"
          placeholder="comment..."
          onChange={handleFormValue}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </>
  )
}

export default CommentForm