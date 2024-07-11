import { lazy, type Component } from 'solid-js';
import { RouteDefinition, Router } from '@solidjs/router';

import { Route } from '~/constants/route';
import Layout from '~/components/Layout';

const routes: RouteDefinition[] = [
  {
      path: Route.HOME,
      component: lazy(() => import('~/pages')),
  },
]

const App: Component = () => {
  return (
    <Router root={Layout}>{routes}</Router>
  );
};

export default App;
