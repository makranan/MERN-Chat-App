import MessageList from './MessageList';
import MessageInput from './MessageInput';

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col ml-2'>
      <>
        {/* Header */}
        <div className='bg-gray-800 py-2 mb-2'>
          <span className='label-text'>To: </span>
          <span className='font-bold'>John Doe</span>
        </div>

        <MessageList />
        <MessageInput />
      </>
    </div>
  );
};

export default MessageContainer;
