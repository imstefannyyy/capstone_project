import { createBrowserRouter, redirect } from 'react-router-dom';

import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import MainLayout from './layouts/MainLayout';
import CompareLayout from './layouts/CompareLayout';
import CompareResult from './pages/CompareResult';
import CompareSelect from './pages/CompareSelect';
import News from './pages/News';

const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'country/:cca2',
                element: <CountryDetails />,
            },
            {
                path: 'compare',
                element: <CompareLayout />,
                children: [
                    {
                        path: '',
                        element: <CompareSelect />,
                    },
                    {
                        path: ':code1/n/:code2',
                        element: <CompareResult />,
                    },
                ]
            },
            {
                path: 'news',
                element: <News />,
            },
        ]
    },
]);

export default router;
