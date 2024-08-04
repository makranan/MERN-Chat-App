import { useSocketContext } from '../../context/SocketContext';
import useConversation from '../../zustand/useConversation';

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineStatus } = useSocketContext();
  const isOnline = onlineStatus.includes(conversation._id);

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-slate-800 rounded p-2 py-1 cursor-pointer
        ${isSelected ? 'bg-slate-800' : ''}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className='w-12'>
            <img src={conversation.profilePic} alt='avatar' />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='text-bold text-gray-200'>{conversation.fullName}</p>
          </div>
        </div>
      </div>
      {!lastIdx && <div className='divider py-0 my-0 h-1'></div>}
    </>
  );
};

export default Conversation;
