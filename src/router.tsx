import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

import ContactPage from "./pages/Contact";
import Productos from "./pages/Productos";



console.log("Router Cargando");

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                index: true,
                path:'/home',
                element:<Home/>
                
            },
            {
                path:'/productos',
                element:<Productos/>
            },
            {
                path:'/contacto',
                element:<ContactPage/>
            }

        ],
    },
])
