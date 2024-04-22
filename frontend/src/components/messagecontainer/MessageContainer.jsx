import MessageList from './MessageList';
import MessageInput from './MessageInput';
import useConversation from '../../zustand/useConversation';
import { useEffect } from 'react';

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <p className='text-gray-400'>Select a chat to start messaging</p>
    </div>
  );
};

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    if (selectedConversation) {
      setSelectedConversation(null);
    }
  }, []);

  return (
    <div className='md:min-w-[450px] flex flex-col ml-2'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className='bg-gray-800 py-2 mb-2'>
            <span className='label-text'>To: </span>
            <span className='font-bold'>{selectedConversation.fullName}</span>
          </div>

          <MessageList />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
