import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Componentes/MainLayout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllVolunteer from "../Pages/AllVolunteer/AllVolunteer";
import HomePage from "../Pages/Home/HomePage";
import MyPost from "../Pages/MyPost/MyPost";
import AddVolunteer from "../Pages/AddVolunteer/AddVolunteer";
import MyProfile from "../Pages/MyProfile/MyProfile";
import PrivetRouter from "./PrivetRouter";
import VolunteerDetailsPage from "../Pages/VolunteerDetailsPage/VolunteerDetailsPage";

import BeVolunteerPage from "../Pages/BeVolunteerPage/BeVolunteerPage";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyVolunteerRequest from "../Pages/MyVolunteerRequest/MyVolunteerRequest";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element:<HomePage></HomePage>,
        },
        {
          path:"AllVolunteer",
          element:<AllVolunteer></AllVolunteer>
        },
        {
          path:"MyProfile",
          element:<MyProfile></MyProfile>
        },
        {
          path:"/details/:id",
          element:<PrivetRouter><VolunteerDetailsPage></VolunteerDetailsPage></PrivetRouter>,
         
        },
        {
          path:"/AllDetails/:id",
          element:<PrivetRouter><VolunteerDetailsPage></VolunteerDetailsPage></PrivetRouter>,
          // loader:({params})=> fetch(`https://management-server-site-7.onrender.com/posts/${params.id}`)
        },
        {
          path:"/BeVolunteer/:id",
          element:<BeVolunteerPage></BeVolunteerPage>,
          loader:({params})=>fetch(`https://management-server-site-7.onrender.com/post/${params?.id}`)
        },
        {
          path:"/BeVolunteer/:id",
          element:<BeVolunteerPage></BeVolunteerPage>,
          loader:({params})=>fetch(`https://management-server-site-7.onrender.com/posts/${params?.id}`)
        },
        {
          path:"/MyVolunteerRequest",
          element:<PrivetRouter><MyVolunteerRequest></MyVolunteerRequest></PrivetRouter>,
        },
        {
          path:"MyPost",
          element:<PrivetRouter><MyPost></MyPost></PrivetRouter>,
          
        },
        {
          path:"/update/:id",
          element:<UpdatePage></UpdatePage>,
          loader:({params})=> fetch(`https://management-server-site-7.onrender.com/posts/${params.id}`)
        },
        {
          path:"AddVolunteer",
          element:<PrivetRouter><AddVolunteer></AddVolunteer></PrivetRouter>
        },
        {
            path: "/login",
            element:<Login></Login>,
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"*",
          element:<ErrorPage></ErrorPage>
        }
      ]
    },
  ]);

export default router;