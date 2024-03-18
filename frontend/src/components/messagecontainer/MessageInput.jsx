import sendMessage from '../../assets/sendMessage.svg';

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
        <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-800 border-gray-600 text-white'
          placeholder='Send a message'
        />
        <button
          type='submit'
          className='absolute inset-y-0 end-0 flex items-center pe-3'
        >
          <img
            src={sendMessage}
            className='h-6 w-6 filter invert grayscale opacity-20'
            alt='send message'
          />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
