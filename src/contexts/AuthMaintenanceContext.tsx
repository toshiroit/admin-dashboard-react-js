import { createContext, ReactElement } from 'react';
import { AuthMaintenanceContextType, AuthMaintenanceProps } from 'types/auth';

export const initialState: AuthMaintenanceProps = {
  active: false,
  maintenance: {
    code: '124',
    day: 24,
    min: 60,
    sec: 60,
    hour: 60
  }
};
// ==============================|| MaintenanceContext & PROVIDER ||============================== //
const MaintenanceContext = createContext<AuthMaintenanceContextType | null>(null);
export const AuthMaintenanceProvider = ({ children }: { children: ReactElement }) => {
  return <MaintenanceContext.Provider value={{ isActive: false, maintenance: null, code: null }}>{children}</MaintenanceContext.Provider>;
};
export default MaintenanceContext;
