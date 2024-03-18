const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-8 rounded-full'>
          <img src='https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png' />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 bg-opacity-30`}>
        Hi! Whats up?
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        13:22
      </div>
    </div>
  );
};

export default Message;
