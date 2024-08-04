import { useState } from 'react';
import searchIcon from '../../assets/searchIcon.svg';
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [input, setInput] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input) return;
    if (conversations.length === 0) return;
    if (input.length < 3) {
      return toast.error('Search query must be at least 3 characters long');
    }

    const searchResult = conversations.find((conversation) =>
      conversation.fullName.toLowerCase().includes(input.toLowerCase())
    );

    if (searchResult) {
      setSelectedConversation(searchResult);
      setInput('');
    } else {
      toast.error('No conversation found');
    }
  };

  return (
    <form className='flex items-center gap-2' onSubmit={handleSearch}>
      <input
        type='text'
        className='input input-bordered rounded-xxl'
        placeholder='Search...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className='btn btn-square'>
        <img src={searchIcon} className='h-auto w-6 filter invert' />
      </button>
    </form>
  );
};

export default SearchInput;
