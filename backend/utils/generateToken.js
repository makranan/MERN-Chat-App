import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });

  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // Cookie cannot be accessed by client side script
    sameSite: 'strict', // Cookie is sent only to the same site as the one that originated it
    secure: process.env.NODE_ENV === 'production', // Cookie is sent only over HTTPS
  });
};

export default generateTokenAndSetCookie;
