import User from '../models/User.js';

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('mobileNumber');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
