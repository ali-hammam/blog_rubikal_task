import React, { useState } from 'react';
import Modal from '../../abstract/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CommentForm from '../../abstract/Forms/CommentForm';
import { addCommentToPost } from '../../fetcher/comments';

const CommentCreator = ({id, comments, setComments}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({post_id: id});

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      formValues &&  
        addCommentToPost( id, formValues )
          .then((response) => {
            if(response.isCreated){
              setComments([...comments, response.comment])
            }
          })
    }
    setValidated(true);
  };

  return (
    <div>
      <button className='btn btn-link' data-toggle="modal" data-target={"#addComment"}>
        create comment
      </button>

      <Modal title='Add Comment' id={'addComment'} >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <CommentForm setFormValues={setFormValues} formValues={formValues}/>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <Button type="submit">Add Your Comment</Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}

export default CommentCreator