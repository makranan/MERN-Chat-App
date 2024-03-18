// import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md  bg-zinc-900 bg-clip-padding '>
        <h1 className='text-xl font-semibold text-center'>
          Login <span className='text-green-400'>ChatApp</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter username'
              className='w-full input input-bordered h-10'
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
            />
          </div>

          {/* <Link>
            <span className='text-sm text-blue-400'>Forgot password?</span>
          </Link>

          <Link>
            <span className='text-sm text-blue-400'>
              Don&apos;t have an account?
            </span>
          </Link> */}

          <div>
            <button className='btn btn-primary btn-sm w-full mt-4'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
