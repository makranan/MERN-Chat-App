import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';
import AppName from '../../components/appname/AppName';

import GenderPicker from './GenderPicker';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const { signup, loading } = useSignUp();

  const handleGenderChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md  bg-zinc-900 bg-clip-padding '>
        <h1 className='flex justify-center text-xl font-semibold text-center'>
          Sign Up
          <span>
            <AppName />
          </span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='John Doe'
              className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='johndoe'
              className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              required
            />
          </div>

          <div className='my-2'>
            <GenderPicker
              onGenderChange={handleGenderChange}
              selectedGender={inputs.gender}
            />
          </div>

          {/* <div className='flex flex-row items-center space-x-4'>
            <label className='label p-2'>
              <span className='text-base label-text'>Gender</span>
            </label>
            <div className='flex items-center space-x-2'>
              <label className='radio radio-primary'>
                <input
                  type='radio'
                  name='gender'
                  value='male'
                  className='radio'
                />
                <span className='ml-2'>Male</span>
              </label>
              <label className='radio radio-primary'>
                <input
                  type='radio'
                  name='gender'
                  value='female'
                  className='radio'
                />
                <span className='ml-2'>Female</span>
              </label>
            </div>
          </div> */}

          <div className='my-4'>
            <Link to='/login' className='text-sm hover:underline text-blue-400'>
              Already have an account?
            </Link>
          </div>

          <div>
            <button
              className='btn btn-primary btn-sm w-full'
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                'Register'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
