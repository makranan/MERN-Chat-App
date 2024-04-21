import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { useAuthContext } from './context/AuthContext';

import './App.css';

function App() {
  const { authState } = useAuthContext();

  return (
    <div className='p-4 h-full flex justify-center'>
      <Routes>
        <Route
          path='/'
          element={authState ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={authState ? <Navigate to='/' /> : <Login />}
        />
        <Route
          path='/signup'
          element={authState ? <Navigate to='/' /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
