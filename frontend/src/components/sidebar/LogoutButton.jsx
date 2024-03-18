import logoutIcon from '../../assets/logoutIcon.svg';

const LogoutButton = () => {
  return (
    <div className='mt-auto'>
      <button className='opacity-30 hover:opacity-100'>
        <img
          src={logoutIcon}
          className='h-6 w-6 filter invert grayscale'
          alt='Logout Icon'
        />
      </button>
    </div>
  );
};

export default LogoutButton;
