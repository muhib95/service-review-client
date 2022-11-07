import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";

const { createBrowserRouter } = require("react-router-dom");

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/')
            },
            {
                path:'/services',
                element:<Services></Services>
            }
        ]
    }

])
