import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostProviderForm from '../../abstract/Forms/PostProviderForm';
import Modal from '../../abstract/Modal';
import { addNewPost } from '../../fetcher/posts';

const CreatePostForm = ({posts, setPosts, setNewPostStatus}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({});
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      formValues &&  
        addNewPost( formValues )
          .then((response) => {setNewPostStatus(response['msg']); setPosts([...posts, {...response['post']}])})
    }
    setValidated(true);
  };
  
  return (
    <Modal title='Add New Post' id='createPost'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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