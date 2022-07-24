import './App.css';
import AuthorizedRoutes, { UnAuthorizedRoutes } from './routes';
import Navbar from './abstract/NavBar';
import { getFromLocalStorage } from './config/localStorage';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    console.log(getFromLocalStorage('token'))
    setToken(getFromLocalStorage('token'))
  },[]);

  const renderUnAuthorizedContent = () => {
    return (
      <>
        <UnAuthorizedRoutes />
      </>
    )
  }

  const renderAuthorizedContent = () => {
    return(
      <>
        <Navbar />
        <AuthorizedRoutes />
      </>
    )
  }

  return (
    <div className='background'>
      {
        token ? renderAuthorizedContent() : renderUnAuthorizedContent()
      }
    </div>
  );
}

export default App;
