import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { removeFromLocalStorate } from '../../config/localStorage';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    removeFromLocalStorate('token');
    navigate('/');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <Link className="navbar-brand" to={'/'}>Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <form className="form-inline my-2 my-lg-0">
        <button button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={logout}>
          Log Out
        </button>
      </form>
    </nav>
  )
}

export default Navbar