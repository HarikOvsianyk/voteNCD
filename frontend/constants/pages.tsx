import { Main, SignIn, LawPage } from '../pages';
//   import { CLIENT_PATH } from '@/constants/path';
//   import { PrivateRoute } from '@/privateRoute/privateRoute';
  
  export const PAGES = [
    {
      label: 'Home',
      path: '/',
      element: <SignIn />,
    },
    {
      label: 'Main',
      path: '/main',
      element: <Main />,
    },
    {
      label: 'Law Page',
      path: '/law/:id',
      element: <LawPage />,
    },

  ];
  