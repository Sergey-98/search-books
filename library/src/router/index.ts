// import About from '../pages/About';
import Main from '../pages/Main/Main';
import Error from '../pages/Page404/Page404';

export const routes = [
  { path: '/', component: Main, exact: true },
  { path: '*', component: Error, exact: true },
  // { path: '/cards/:id', component: SearchBooks, exact: true },
];
