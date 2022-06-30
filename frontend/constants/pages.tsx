import { Main, SignIn, VotePage, Error, NewVote } from '../pages';
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
      label: 'Vote Page',
      path: '/vote/:id',
      element: <PrivateRoute component={VotePage}/>,
    },
    {
      label: 'Error',
      path: '/error',
      element: <Error />,
    },
    {
      label: 'NewVote',
      path: '/newvote',
      element: <PrivateRoute component={NewVote}/>,
    },
  ];
  