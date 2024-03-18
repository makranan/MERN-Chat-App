const Conversation = () => {
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-slate-800 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
          <div className='w-12'>
            <img
              src='https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png'
              alt='avatar'
            />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='text-bold text-gray-200'>John Doe</p>
          </div>
        </div>
      </div>
      <div className='divider py-0 my-0 h-1'></div>
    </>
  );
};

export default Conversation;
