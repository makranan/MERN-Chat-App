import logoutIcon from '../../assets/logoutIcon.svg';
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className='mt-auto'>
      {!loading ? (
        <button className='opacity-30 hover:opacity-100' onClick={logout}>
          <img
            src={logoutIcon}
            className='h-6 w-6 filter invert grayscale'
            alt='Logout Icon'
          />
        </button>
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
};

export default LogoutButton;
