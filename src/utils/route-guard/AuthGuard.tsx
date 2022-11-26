import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project import
import useAuth from 'hooks/useAuth';
import useMaintenance from 'hooks/useMaintenance'
// types
import { GuardProps } from 'types/auth';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const { isActive } = useMaintenance()
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && !isActive) {
      navigate('login', { replace: true });
    }
    else if (isLoggedIn && isActive) {
      navigate('bao-tri', { replace: true })
    }
    else if (!isLoggedIn && isActive) {
      navigate('bao-tri', { replace: true })
    }
  }, [isLoggedIn, navigate]);

  return children;
};

export default AuthGuard;
