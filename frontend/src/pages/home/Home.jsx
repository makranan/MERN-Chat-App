import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messagecontainer/MessageContainer';

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[650px] rounded-lg overflow-hidden'>
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
