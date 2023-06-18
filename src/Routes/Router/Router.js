import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Layout/Main'
import Home from '../../Pages/Home/Home'
import Login from '../../Pages/Login/Login'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from '../../theme/theme';


const Router = ({ children }) => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: 'Home',
                    element: <Home />
                },
                {
                    path: 'Login',
                    element: <Login />
                }

            ]

        }

    ])

    return (

        <div>
            <ThemeProvider theme={theme}>
            <RouterProvider router={router}>
                {children}
            </RouterProvider>
            <CssBaseline />
           </ThemeProvider>

        </div>

    );
};

export default Router;