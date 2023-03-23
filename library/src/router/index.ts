import Main from '../pages/Main/Main';
import OneBook from '../components/OneBook/OneBook';
import Error from '../pages/Page404/Page404';

export const routes = [
  { path: '/', component: Main, exact: true },
  { path: '/:id', component: OneBook, exact: true },
  { path: '*', component: Error, exact: true },
  // { path: '/cards/:id', component: SearchBooks, exact: true },
];
