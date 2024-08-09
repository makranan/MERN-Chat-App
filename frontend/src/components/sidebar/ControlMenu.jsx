import AppName from '../appname/AppName';
import LogoutButton from './LogoutButton';
import ProfileButton from './ProfileButton';

const ControlMenu = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='rotate-90'>{/* <AppName /> */}</div>
      <div className='px-2'>
        <ProfileButton />
        <LogoutButton />
      </div>
    </div>
  );
};

export default ControlMenu;
