import Main from "../Main/Main";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/servicesdetails/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader:({params})=>fetch(`https://b6a11-service-review-server-side-muhib95.vercel.app/servicesdetails/${params.id}`)
            },
            {
                path:'/myreview',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path:'/addservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>

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

            },
            {
                path:'/updateproduct/:id',
                element:<PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader:({params})=>fetch(`https://b6a11-service-review-server-side-muhib95.vercel.app/updateproduct/${params.id}`)
            }
        ]
    }

])
