import React, { useRef, useState } from 'react'
import Modal from '../../abstract/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostProviderForm from '../../abstract/Forms/PostProviderForm';
import { editPost } from '../../fetcher/posts';


const PostEditor = ({id, setPosts, posts}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({});
  const title = useRef();
  const body = useRef();

  const getIndexOfCurrentPost = () => posts.findIndex((post)=>post['id'] === id);
  
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    const data = {title: title.current.value, body: body.current.value}
    if (form.checkValidity()) {
        editPost( id, data )
          .then((response) => {
            response.isUpdated && setPosts(posts.map((prevPost) => id===prevPost.id ? {...prevPost,...data} : {...prevPost}))
          })
    }
    setValidated(true);
  };

  return (
    <div id={id} key={id}>
      <button className='btn btn-warning' data-toggle="modal" data-target={"#editPost"+id}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
        </svg>
      </button>

      <Modal title='Edit Post' id={'editPost'+id} >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <PostProviderForm 
            setFormValues={setFormValues} 
            formValues={formValues}
            title={posts[getIndexOfCurrentPost()]['title']}
            body={posts[getIndexOfCurrentPost()]['body']}
            titleInputChange={title}
            bodyInputChange={body}
            />
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