const router = require('express').Router();
const Chat = require('../models/Chat');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Get all chat threads for current user
router.get('/', auth, async (req, res) => {
  try {
    const query = req.user.role === 'buyer'
      ? { buyer: req.user._id }
      : { farmer: req.user._id };

    const chats = await Chat.find(query)
      .populate('buyer', 'name emoji role')
      .populate('farmer', 'name emoji role')
      .sort({ lastMessageTime: -1 });

    // Add otherUser so Flutter knows who to display
    const result = chats.map(chat => {
      const obj = chat.toObject();
      obj.otherUser = req.user.role === 'buyer' ? obj.farmer : obj.buyer;
      return obj;
    });

    res.json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Get or create chat thread between buyer and farmer
router.post('/thread', auth, async (req, res) => {
  try {
    const { farmerId } = req.body;
    let chat = await Chat.findOne({ buyer: req.user._id, farmer: farmerId })
      .populate('buyer', 'name emoji role')
      .populate('farmer', 'name emoji role');

    if (!chat) {
      const farmer = await User.findById(farmerId);
      if (!farmer)
        return res.status(404).json({ message: 'Farmer not found' });

      chat = await Chat.create({
        buyer: req.user._id,
        farmer: farmerId,
        farmerName: farmer.name,
        farmerEmoji: farmer.emoji,
        statusNote: 'New conversation',
      });

      chat = await Chat.findById(chat._id)
        .populate('buyer', 'name emoji role')
        .populate('farmer', 'name emoji role');
    }

    const obj = chat.toObject();
    obj.otherUser = req.user.role === 'buyer' ? obj.farmer : obj.buyer;
    res.json(obj);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Get messages for a chat thread
router.get('/:id/messages', auth, async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat)
      return res.status(404).json({ message: 'Chat not found' });
    res.json(chat.messages);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Send a message
router.post('/:id/messages', auth, async (req, res) => {
  try {
    const { text } = req.body;
    const chat = await Chat.findById(req.params.id);
    if (!chat)
      return res.status(404).json({ message: 'Chat not found' });

    const message = {
      sender: req.user._id,
      text,
      isFromFarmer: req.user.role === 'farmer',
    };

    chat.messages.push(message);
    chat.lastMessage = text;
    chat.lastMessageTime = new Date();
    await chat.save();

    res.status(201).json(chat.messages[chat.messages.length - 1]);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;