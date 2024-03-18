import GenderPicker from './GenderPicker';

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md  bg-zinc-900 bg-clip-padding '>
        <h1 className='text-xl font-semibold text-center'>
          Sign Up <span className='text-green-400'>ChatApp</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='John Doe'
              className='w-full input input-bordered h-10'
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
              required
            />
          </div>

          <GenderPicker />

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

          {/* 

      <Link>
        <span className='text-sm text-blue-400'>
          Already have an account?
        </span>
      </Link> */}

          <div>
            <button className='btn btn-primary btn-sm w-full mt-4'>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
