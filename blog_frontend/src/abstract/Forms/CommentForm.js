import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const CommentForm = ({formValues,setFormValues, comment = ''}) => {

  useEffect(() => {
    setFormValues({comment: comment});
  }, [])

  const handleFormValue = (e) => setFormValues({...formValues, [e.target.name]:e.target.value});

  return (
    <>
      <Form.Group  controlId="validationCustom03">
        <Form.Label>comment</Form.Label>
        <Form.Control
          as={'textarea'}
          row={4}
          name='comment'
          required
          type="text"
          placeholder="comment..."
          onChange={handleFormValue}
          value={formValues.comment}
          defaultValue={comment || ''}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </>
  )
}

export default CommentForm