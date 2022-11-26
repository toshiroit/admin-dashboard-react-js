import { useContext } from 'react';

// auth provider
import AuthContext from 'contexts/AuthMaintenanceContext';
// import AuthContext from 'contexts/AWSCognitoContext';
// import AuthContext from 'contexts/JWTContext';
// import AuthContext from 'contexts/Auth0Context';

// ==============================|| AUTH HOOKS ||============================== //

const useMaintenance = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('context must be use inside provider');
  return context;
};

export default useMaintenance;
