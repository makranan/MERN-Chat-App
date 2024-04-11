import SearchInput from './SearchInput';
import ConversationList from './ConversationList';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className='p-2 overflow-auto flex flex-col'>
      <SearchInput />
      <div className='divider px-3' />
      <ConversationList />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
