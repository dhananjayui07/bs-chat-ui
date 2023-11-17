import Home from './pages/home';

const routes = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
];

export default routes;
