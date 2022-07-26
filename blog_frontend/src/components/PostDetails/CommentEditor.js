import React, { useRef, useState } from 'react'
import Modal from '../../abstract/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updateCommentFromPost } from '../../fetcher/comments';
import CommentForm from '../../abstract/Forms/CommentForm';


const CommentEditor = ({id, setComments, comments}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({});
  const commentRef = useRef();

  const getIndexOfCurrentComment = () => comments.findIndex((comment)=>comment['id'] === id);
  
  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
        updateCommentFromPost( id, formValues )
          .then((response) => {
            response.isUpdated && setComments(comments.map((prevComment) => 
              id===prevComment.id ? {...prevComment,...formValues} : {...prevComment}
            ))
          })
    }
    setValidated(true);
  };

  return (
    <div id={id} key={id}>
      <button className='btn btn-link text-dark' data-toggle="modal" data-target={"#editComment"+id}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
        </svg>
      </button>

      <Modal title='Edit Comment' id={'editComment'+id} >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <CommentForm 
            setFormValues={setFormValues} 
            formValues={formValues}
            comment={comments[getIndexOfCurrentComment()]['comment']}
            />
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <Button type="submit">Edit Your Comment</Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}

export default CommentEditor