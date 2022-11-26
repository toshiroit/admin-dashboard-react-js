import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { Container, Toolbar } from '@mui/material';

// project import
import Header from './Header';
import ComponentLayout from './ComponentLayout';
import FooterBlock from './FooterBlock';
import { openComponentDrawer } from 'store/reducers/menu';

// types
import { RootStateProps } from 'types/root';

// ==============================|| MINIMAL LAYOUT ||============================== //

const CommonLayout = ({ layout = 'blank' }: { layout?: string }) => {
  const dispatch = useDispatch();

  const menu = useSelector((state: RootStateProps) => state.menu);
  const { componentDrawerOpen } = menu;

  const handleDrawerOpen = () => {
    dispatch(openComponentDrawer({ componentDrawerOpen: !componentDrawerOpen }));
  };

  return (
    <>
      {(layout === 'landing' || layout === 'simple') && (
        <>
          <Header layout={layout} />
          <Outlet />
          <FooterBlock isFull={layout === 'landing'} />
        </>
      )}
      {layout === 'component' && (
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          <Header handleDrawerOpen={handleDrawerOpen} layout="component" />
          <Toolbar sx={{ my: 2 }} />
          <ComponentLayout handleDrawerOpen={handleDrawerOpen} componentDrawerOpen={componentDrawerOpen} />
        </Container>
      )}
      {layout === 'blank' && <Outlet />}
    </>
  );
};

export default CommonLayout;
