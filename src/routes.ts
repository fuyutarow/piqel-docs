import { lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';

import Home from './pages/home';
import CLI from './pages/cli';
import Rust from './pages/rust';
import Python from './pages/python';
import JavaScript from './pages/javascript';
import AboutData from './pages/about.data';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/cli',
    component: CLI,
  },
  {
    path: '/rust',
    component: Rust,
  },
  {
    path: '/python',
    component: Python,
  },
  {
    path: '/javascript',
    component: JavaScript,
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
    data: AboutData,
  },
  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];
