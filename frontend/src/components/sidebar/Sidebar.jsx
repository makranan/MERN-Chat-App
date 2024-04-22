import AppName from '../appname/AppName';
import SearchInput from './SearchInput';
import ConversationList from './ConversationList';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className='p-2 overflow-auto flex flex-col'>
      <div className='flex justify-between mb-2'>
        <AppName />
        <LogoutButton />
      </div>

      <SearchInput />
      <div className='divider px-3' />
      <ConversationList />
    </div>
  );
};

export default Sidebar;
