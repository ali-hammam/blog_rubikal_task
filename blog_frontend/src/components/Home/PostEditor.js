import React, { useState } from 'react'
import Modal from '../../abstract/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostProviderForm from '../../abstract/Forms/PostProviderForm';
import { editPost } from '../../fetcher/posts';


const PostEditor = ({id, setPosts, posts}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({});
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
        editPost( id, formValues )
          .then((response) => {
              response.isUpdated && 
                setPosts(posts.map((prevPost) => id === prevPost.id ? {...formValues} : {...prevPost} )) 
          })
    }
    setValidated(true);
  };

  return (
    <div id={id} key={id}>
      <button className='btn btn-link' data-toggle="modal" data-target={"#editPost"+id}>
        Edit Post
      </button>

      <Modal title='Edit Post' id={'editPost'+id} >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <PostProviderForm setFormValues={setFormValues} formValues={formValues}/>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <Button type="submit">Edit Post</Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}

export default PostEditor