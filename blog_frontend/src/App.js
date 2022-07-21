import './App.css';
import BlogRouter from './routes';
import Navbar from './abstract/NavBar';

function App() {
  return (
    <>
        <Navbar />
        <BlogRouter />
    </>
  );
}

export default App;
