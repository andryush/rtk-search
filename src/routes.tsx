import { lazy } from 'react';
import { MainLayout } from './Layout/MainLayout';

const SearchPage = lazy(() => import('./pages/Search'));

export const routes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <SearchPage />
      </MainLayout>
    ),
  },
];
