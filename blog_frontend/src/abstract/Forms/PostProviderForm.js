import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const PostProviderForm = ({formValues, setFormValues, title = '', body = ''}) => {
  
  useEffect(() => {
    setFormValues({title: title, body: body});
  }, [])
  
  const handleFormValue = (e) => setFormValues({...formValues, [e.target.name]:e.target.value})
  const onImageChange = (e) => setFormValues({...formValues, 'post_image': e.target.files[0]})

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
          value={formValues.title}
          defaultValue={title || ''}
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
          defaultValue={body || ''}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group  controlId="validationCustom03">
        <Form.Label>Image</Form.Label>
        <Form.Control
          row={4}
          name='image'
          type="file"
          multiple={false}
          placeholder="image..."
          onChange={onImageChange}
        />
      </Form.Group>
    </>
  )
}

export default PostProviderForm