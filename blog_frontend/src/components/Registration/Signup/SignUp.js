import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignUpForm from '../../../abstract/Forms/SignUpForm';
import { Link } from 'react-router-dom';
import { createNewUser } from '../../../fetcher/signUp';
import '../style.css';

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [errMsg, setErrMsg] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      formValues &&  
        createNewUser( formValues )
          .then((response) => {
            if(response['isError']){
              setErrMsg(response['errors'][0]);
            }else{
              setErrMsg('User created Successfully')
              window.location.replace("http://localhost:3001");
            }
          })
          .catch(setErrMsg(false))
    }
    setValidated(true);
  }

  return (
    <div className='container mt-5 registration_form_container p-4'>
      {errMsg && <div className="alert alert-primary">
          {errMsg}
        </div>
      }
      <div className='row d-flex align-items-center'>
        <div className='col-xl-8'>
          <h1>Sign Up</h1>
        </div>

        <Link to={'/'}>
          <button className='btn btn-light'>Login</button>
        </Link>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <SignUpForm setFormValues={setFormValues} formValues={formValues}/>
        <div className="modal-footer">
          <Button type="submit" className='btn btn-dark'>Register</Button>
        </div>
      </Form>
    </div>
  )
}

export default SignUp