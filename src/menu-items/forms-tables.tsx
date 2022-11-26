// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { TableOutlined, InsertRowAboveOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = { TableOutlined, InsertRowAboveOutlined };

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const formsTables: NavItemType = {
  id: 'group-forms-tables',
  title: <FormattedMessage id="forms-tables" />,
  type: 'group',
  children: [
    {
      id: 'react-tables',
      title: <FormattedMessage id="react-table" />,
      type: 'collapse',
      icon: icons.TableOutlined,
      children: [
        {
          id: 'rt-table',
          title: <FormattedMessage id="basic" />,
          type: 'item',
          url: '/tables/react-table/basic'
        },
        {
          id: 'rt-sorting',
          title: <FormattedMessage id="sorting" />,
          type: 'item',
          url: '/tables/react-table/sorting'
        },
        {
          id: 'rt-filtering',
          title: <FormattedMessage id="filtering" />,
          type: 'item',
          url: '/tables/react-table/filtering'
        },
        {
          id: 'rt-grouping',
          title: <FormattedMessage id="grouping" />,
          type: 'item',
          url: '/tables/react-table/grouping'
        },
        {
          id: 'rt-pagination',
          title: <FormattedMessage id="pagination" />,
          type: 'item',
          url: '/tables/react-table/pagination'
        },
        {
          id: 'rt-row-selection',
          title: <FormattedMessage id="row-selection" />,
          type: 'item',
          url: '/tables/react-table/row-selection'
        },
        {
          id: 'rt-expanding',
          title: <FormattedMessage id="expanding" />,
          type: 'item',
          url: '/tables/react-table/expanding'
        },
        {
          id: 'rt-editable',
          title: <FormattedMessage id="editable" />,
          type: 'item',
          url: '/tables/react-table/editable'
        },
        {
          id: 'rt-drag-drop',
          title: <FormattedMessage id="drag-drop" />,
          type: 'item',
          url: '/tables/react-table/drag-drop'
        },
        {
          id: 'rt-column-hiding',
          title: <FormattedMessage id="column-hiding" />,
          type: 'item',
          url: '/tables/react-table/column-hiding'
        },
        {
          id: 'rt-umbrella',
          title: <FormattedMessage id="umbrella" />,
          type: 'item',
          url: '/tables/react-table/umbrella'
        }
      ]
    },
    {
      id: 'mui-tables',
      title: <FormattedMessage id="mui-table" />,
      type: 'collapse',
      icon: icons.InsertRowAboveOutlined,
      children: [
        {
          id: 'mui-table',
          title: <FormattedMessage id="basic" />,
          type: 'item',
          url: '/tables/mui-table/basic'
        },
        {
          id: 'mui-dense',
          title: <FormattedMessage id="dense" />,
          type: 'item',
          url: '/tables/mui-table/dense'
        },
        {
          id: 'mui-enhanced',
          title: <FormattedMessage id="enhanced" />,
          type: 'item',
          url: '/tables/mui-table/enhanced'
        },
        {
          id: 'mui-data-table',
          title: <FormattedMessage id="datatable" />,
          type: 'item',
          url: '/tables/mui-table/datatable'
        },
        {
          id: 'mui-custom',
          title: <FormattedMessage id="custom" />,
          type: 'item',
          url: '/tables/mui-table/custom'
        },
        {
          id: 'mui-fixed-header',
          title: <FormattedMessage id="fixed-header" />,
          type: 'item',
          url: '/tables/mui-table/fixed-header'
        },
        {
          id: 'mui-collapse',
          title: <FormattedMessage id="collapse" />,
          type: 'item',
          url: '/tables/mui-table/collapse'
        }
      ]
    }
  ]
};

export default formsTables;
