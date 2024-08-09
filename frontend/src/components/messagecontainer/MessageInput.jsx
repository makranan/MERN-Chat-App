import { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';

import sendMessageIcon from '../../assets/sendMessage.svg';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;
    await sendMessage(message);
    setMessage('');
  };

  return (
    <form className='' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input
          type='text'
          className='input text-sm rounded-lg block w-full p-2.5 bg-gray-800 border-gray-600 text-white'
          placeholder='Send a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type='submit'
          className='absolute inset-y-0 end-0 flex items-center pe-3'
        >
          {loading ? (
            <div className='loading loading-spinner'></div>
          ) : (
            <img
              src={sendMessageIcon}
              className='h-6 w-6 filter invert text-green-500'
              alt='send message'
            />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
