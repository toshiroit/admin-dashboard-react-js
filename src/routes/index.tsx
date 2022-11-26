import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// project import
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
import ComponentsRoutes from './ComponentsRoutes';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import Error404 from 'pages/maintenance/404';
import AuthGuard from 'utils/route-guard/AuthGuard';

// render - landing page
const PagesLanding = Loadable(lazy(() => import('pages/landing')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: (
        <AuthGuard>
          <CommonLayout layout="landing" />
        </AuthGuard>
      ),
      children: [
        {
          path: '/',
          element: <PagesLanding />
        }
      ]
    },
    {
      path: '/',
      children: [
        {
          path: 'bao-tri',
          element: <MaintenanceComingSoon />
        }
      ]
    },
    {
      path: '*',
      element: <Error404 />
    },
    LoginRoutes,
    ComponentsRoutes,
    MainRoutes
  ]);
}
