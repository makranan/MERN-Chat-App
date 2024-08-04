import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/exractTime.js';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
  const { authState } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authState._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe
    ? authState.profilePic
    : selectedConversation?.profilePic;

  const bubbleColor = fromMe ? 'bg-grey-800' : 'bg-blue-500';
  const formattedTime = extractTime(message.createdAt);
  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-8 rounded-full'>
          <img src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-opacity-30 ${bubbleColor}`}>
        {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
