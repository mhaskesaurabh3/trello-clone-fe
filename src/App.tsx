import './App.css';
import Login from './Pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
