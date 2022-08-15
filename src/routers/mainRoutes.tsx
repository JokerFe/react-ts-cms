import Home from '@pages/Home';
import Courses from '@pages/Courses';

const layoutChildrenRoutes = [
  {
    path: '/',
    element: <Home />,
    name: '首页',
    meta: {
      isNavBar: true,
    },
  },
  {
    path: '/admin',
    name: '管理页',
    meta: {
      isNavBar: true,
    },
    children: [
      {
        path: '/admin/list',
        name: '管理列表页',
        element: <Courses />,
        meta: {
          isNavBar: true,
        },
      },
      {
        path: '/admin/create',
        name: '管理创建页',
        element: <Courses />,
      },
    ],
  },
];

export default layoutChildrenRoutes;
