import searchIcon from '../../assets/searchIcon.svg';

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input
        type='text'
        className='input input-bordered rounded-xxl'
        placeholder='Search...'
      />
      <button className='btn btn-square'>
        <img src={searchIcon} className='h-auto w-6 filter invert' />
      </button>
    </form>
  );
};

export default SearchInput;
