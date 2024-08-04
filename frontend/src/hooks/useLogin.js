import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const handleInputError = ({ username, password }) => {
  if (!username || !password) {
    toast.error('All fields are required');

    return false;
  }

  return true;
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthState } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputError({
      username,
      password,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch('api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem('authUser', JSON.stringify(data));
      setAuthState(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
