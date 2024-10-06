import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  // Function to get token from cookies
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  // Function to check token expiration
  const checkTokenExpiration = () => {
    const token = getCookie('token');
    if (!token) {
      navigate('/login');
      return false;
    }

    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      navigate('/login');
      return false;
    }

    try {
      const payload = JSON.parse(atob(tokenParts[1]));
      const expiration = payload.exp;
      const currentTime = Math.floor(Date.now() / 1000);

      if (expiration && currentTime >= expiration) {
        navigate('/login');
      }
    } catch (error) {
      navigate('/login');
    }
  };

  // Run the token check when the app loads
  useEffect(() => {
    checkTokenExpiration();
  }, []); // Empty dependency array to run only once on app load

  return (
    <div>
      {/* Your main app layout or routes */}
    </div>
  );
};

export default App;
