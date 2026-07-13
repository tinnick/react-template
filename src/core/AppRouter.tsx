import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppShell from './AppShell';
import TopPage from '../pages/TopPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [{ index: true, element: <TopPage /> }],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
