import MessageList from './MessageList';
import MessageInput from './MessageInput';

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <p className='text-gray-400'>Select a chat to start messaging</p>
    </div>
  );
};

const MessageContainer = () => {
  const chatSelected = false;

  return (
    <div className='md:min-w-[450px] flex flex-col ml-2'>
      {chatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className='bg-gray-800 py-2 mb-2'>
            <span className='label-text'>To: </span>
            <span className='font-bold'>John Doe</span>
          </div>

          <MessageList />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
