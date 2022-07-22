import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignInForm from '../../../abstract/Forms/SignInForm';
import { UserLogin } from '../../../fetcher/signIn';
import { addToLocalStorage } from '../../../config/localStorage';
import { Link } from 'react-router-dom';
import '../style.css';


const SignIn = () => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [errMsg, setErrMsg] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      formValues &&  
        UserLogin( formValues )
          .then((response) => {
            if(response['error']){
              setErrMsg(response['error']);
            }else{
              addToLocalStorage("token", response['token'])
              window.location.replace("http://localhost:3001/");
            }
          })
          .catch(setErrMsg(false))
    }
    setValidated(true);
  }


  return (
    <div className='container mt-5 registration_form_container p-4'>
      <div className='row d-flex align-items-center'>
        <div className='col-xl-8'>
          <h1>Log In</h1>
        </div>

        <Link to={'/signup'}>
          <button className='btn btn-light'>Sign Up</button>
        </Link>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <SignInForm setFormValues={setFormValues} formValues={formValues}/>
        <div className="modal-footer">
          <Button type="submit">Login</Button>
        </div>
      </Form>
      {errMsg && <div className="alert alert-danger">
          Wrong Credentials
        </div>
      }
    </div>
  )
}

export default SignIn