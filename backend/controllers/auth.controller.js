import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const signup = async (req, res) => {
  try {
    // DESTRUCTURE REQUEST BODY
    const { fullName, username, password, confirmPassword, gender } = req.body;

    // VALIDATE REQUEST BODY
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Password does not match' });
    }

    // CHECK IF USER EXISTS
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // GENERATE PROFILE PICTURE
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // CREATE NEW USER
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //GENERATE JWT TOKEN
      generateTokenAndSetCookie(newUser.id, res);

      // SAVE USER TO DB
      await newUser.save();

      res.status(201).json({
        _id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: 'Invalid user data' });
    }
  } catch (error) {
    console.log('Signup error:', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

export const login = (req, res) => {
  res.send('Login user');
};

export const logout = (req, res) => {
  res.send('Logout user');
};
