import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostProviderForm from '../../abstract/Forms/PostProviderForm';
import Modal from '../../abstract/Modal';
import { addNewPostWithImage } from '../../fetcher/posts';

const CreatePostForm = ({posts, setPosts, setNewPostStatus}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({});
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    const formData = new FormData();
    if (form.checkValidity()) {
      formData.append('title', formValues.title);
      formData.append('body', formValues.body);
      formValues.post_image && formData.append('post_image', formValues.post_image, formValues.post_image.name);
      addNewPostWithImage(formData).then((response) => {
        setNewPostStatus(response['msg']); setPosts([...posts, {...response['post']}])
      })
    }
    setValidated(true);
  };
  
  return (
    <Modal title='Add New Post' id='createPost'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} encType="multipart/form-data">
        <PostProviderForm setFormValues={setFormValues} formValues={formValues}/>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <Button type="submit">Create Post</Button>
        </div>
      </Form>
    </Modal>      
  )
}

export default CreatePostForm