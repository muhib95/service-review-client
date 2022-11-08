import Main from "../Main/Main";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";

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
            },
            {
                path:'/servicesdetails/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader:({params})=>fetch(`http://localhost:5000/servicesdetails/${params.id}`)
            },
            {
                path:'/myreview',
                element:<MyReview></MyReview>
            },
            {
                path:'/addservice',
                element:<AddService></AddService>

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>

            }
        ]
    }

])
