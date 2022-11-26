// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  CalendarOutlined,
  CustomerServiceOutlined,
  TagsOutlined,
  UnorderedListOutlined,
  MessageOutlined,
  FileAddOutlined,
  ShoppingCartOutlined,
  UserOutlined
} from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  CalendarOutlined,
  TagsOutlined,
  FileAddOutlined,
  CustomerServiceOutlined,
  UnorderedListOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  UserOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const applications: NavItemType = {
  id: 'group-applications',
  title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'chat',
      title: <FormattedMessage id="chat" />,
      type: 'item',
      url: '/apps/chat',
      icon: icons.MessageOutlined,
      breadcrumbs: false
    },
    {
      id: 'calendar',
      title: <FormattedMessage id="calendar" />,
      type: 'item',
      url: '/apps/calendar',
      icon: icons.CalendarOutlined
    },
    {
      id: 'customer',
      title: <FormattedMessage id="customer" />,
      type: 'collapse',
      icon: icons.CustomerServiceOutlined,
      children: [
        {
          id: 'customer-list',
          title: <FormattedMessage id="list" />,
          type: 'item',
          url: '/apps/customer/list'
        }
      ]
    },
    {
      id: 'profile',
      title: <FormattedMessage id="profile" />,
      type: 'collapse',
      icon: icons.UserOutlined,
      children: [
        {
          id: 'user-profile',
          title: <FormattedMessage id="user-profile" />,
          type: 'item',
          url: '/apps/profiles/user/personal'
        },
        {
          id: 'account-profile',
          title: <FormattedMessage id="account-profile" />,
          type: 'item',
          url: '/apps/profiles/account/basic'
        }
      ]
    },
    {
      id: 'shop',
      title: <FormattedMessage id="shop" />,
      type: 'collapse',
      icon: icons.ShoppingCartOutlined,
      children: [
        // {
        //   id: 'list-shop',
        //   title: <FormattedMessage id="list-shop" />,
        //   type: 'item',
        //   url: '/apps/shop/List-shop'
        // },
        // {
        //   id: 'product-details',
        //   title: <FormattedMessage id="product-details" />,
        //   type: 'item',
        //   url: '/apps/e-commerce/product-details/1',
        //   breadcrumbs: false
        // },
        {
          id: 'shop-list',
          title: <FormattedMessage id="shop-list" />,
          type: 'item',
          url: '/apps/shop/shop-list',
          breadcrumbs: true
        },
        {
          id: 'add-new-shop',
          title: <FormattedMessage id="add-new-shop" />,
          type: 'item',
          url: '/apps/shop/add-new-shop'
        },
        {
          id: 'checkout-shop',
          title: <FormattedMessage id="checkout-shop" />,
          type: 'item',
          url: '/apps/shop/checkout-shop'
        }
      ]
    },
    {
      id: 'category',
      title: <FormattedMessage id="category" />,
      type: 'collapse',
      icon: icons.TagsOutlined,
      children: [
        {
          id: 'category-list',
          title: <FormattedMessage id="category-list" />,
          type: 'item',
          url: '/apps/category/category-list'
        },
        {
          id: 'add-new-category',
          title: <FormattedMessage id="add-new-category" />,
          type: 'item',
          url: '/apps/category/add-new-category'
        }
      ]
    }
  ]
};

export default applications;
