import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session here
    navigate('/login');
  }, [navigate]);

  return null;
};

export default Logout;