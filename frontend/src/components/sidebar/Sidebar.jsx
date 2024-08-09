import AppName from '../appname/AppName';
import SearchInput from './SearchInput';
import ConversationList from './ConversationList';
import LogoutButton from './LogoutButton';
import ControlMenu from './ControlMenu';

const Sidebar = () => {
  return (
    <div className="p-2 flex flex-row bg-neutral-800 h-full">
  <div className="mb-2">
    <ControlMenu />
  </div>
  <div className="flex flex-col flex-grow">
    <div className="mb-2">
      <SearchInput />
    </div>
    {/* The scrollable part */}
    <div className="flex-grow overflow-auto">
      <ConversationList />
    </div>
  </div>
  {/* If you want the LogoutButton to remain fixed, place it here */}
  {/* <div>
    <LogoutButton />
  </div> */}
</div>

  );
};

export default Sidebar;
