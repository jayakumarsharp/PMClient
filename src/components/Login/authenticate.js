import jwtDecode from 'jsonwebtoken';

const verifyToken = (token) => {
  try {
    const decoded = jwtDecode(token, 'your_secret_key');
    // Check if the token is expired (optional)
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      throw new Error('Token expired');
    }
    return decoded;
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};

export const getToken = () => localStorage.getItem('token');

export const getUser = () => {
  const token = getToken();
  if (!token) return null;
  return verifyToken(token);
};