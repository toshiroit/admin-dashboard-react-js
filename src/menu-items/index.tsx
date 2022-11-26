// project import
import applications from './applications';
import dashboard from './dashboard';
import other from './other';
import pages from './pages';

import { NavItemType } from 'types/menu';
import formsTables from './forms-tables';
import security from './security';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, applications, security, pages, other, formsTables]
};

export default menuItems;
