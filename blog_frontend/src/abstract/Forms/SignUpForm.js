import React from 'react';
import Form from 'react-bootstrap/Form';

const SignUpForm = ({formValues,setFormValues}) => {
  
  const handleFormValue = (e) => setFormValues({...formValues, [e.target.name]:e.target.value});

  return (
    <>
      <Form.Group  controlId="validationCustom04" className='m-4'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          name='username'
          required
          type="text"
          placeholder="Name.."
          onChange={handleFormValue}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group  controlId="validationCustom05" className='m-4'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name='email'
          required
          type="email"
          placeholder="Email.."
          onChange={handleFormValue}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group  controlId="validationCustom06" className='m-4'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name='password'
          required
          type="password"
          placeholder="Password.."
          onChange={handleFormValue}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </>
  )
}

export default SignUpForm