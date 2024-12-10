import { createBrowserRouter, redirect } from 'react-router-dom';

import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'country/:cca2',
                element: <CountryDetails />,
            }
        ]
    },
]);

export default router;
