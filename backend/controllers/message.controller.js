import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // Check if the conversation already exists
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // If the conversation doesn't exist, create a new one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // Create a new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // Add the message to the conversation
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // Save the new message and update conversation
    await Promise.all([newMessage.save(), conversation.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log(`Error in sendMessage controller: ${error.message}`);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages');

    if (!conversation) {
      return res.status(200).json([]);
    }

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log(`Error in getMessage controller: ${error.message}`);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
