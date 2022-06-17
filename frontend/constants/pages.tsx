import { Main, SignIn, LawPage, Error } from '../pages';
  import { PrivateRoute } from '../components';
  
  export const PAGES = [
    {
      label: 'Home',
      path: '/',
      element: <SignIn />,
    },
    {
      label: 'Main',
      path: '/main',
      element: <PrivateRoute component={Main}/>,
    },
    {
      label: 'Law Page',
      path: '/law/:id',
      element: <PrivateRoute component={LawPage}/>,
    },
    {
      label: 'Error',
      path: '/error',
      element: <Error />,
    },
  ];
  