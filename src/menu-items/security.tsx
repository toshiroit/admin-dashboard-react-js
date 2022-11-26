import { FormattedMessage } from 'react-intl';
import { NavItemType } from 'types/menu';
import { SecurityScanOutlined } from '@ant-design/icons';
const icons = { SecurityScanOutlined };
const security: NavItemType = {
  id: 'group-security',
  title: <FormattedMessage id="security" />,
  type: 'group',
  icon: icons.SecurityScanOutlined,
  children: [
    {
      id: 'security',
      title: <FormattedMessage id="security-setting" />,
      type: 'collapse',
      icon: icons.SecurityScanOutlined,
      search: 'security124',
      children: [
        {
          id: 'security-user-setting',
          title: <FormattedMessage id="security-user-setting" />,
          type: 'item',
          search: 'security124s5',
          url: '/security/user-setting',
          target: true
        },
        {
          id: 'security-user-password',
          title: <FormattedMessage id="security-user-password" />,
          type: 'item',
          url: '/security/user-setting',
          target: true
        }
      ]
    }
  ]
};
export default security;
