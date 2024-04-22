import useGetConversations from '../../hooks/useGetConversations';
import Conversation from './Conversation';

const ConversationList = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className='py-2 flex flex-col'>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className='loading loading-spinner mx-auto'></span>
      ) : null}
    </div>
  );
};

export default ConversationList;
