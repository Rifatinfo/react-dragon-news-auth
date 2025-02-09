
  import {
    createBrowserRouter,
    Navigate,
  } from "react-router-dom";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
// import Roots from "../Roots/Roots";
import HomeMain from "../Components/HomeMain/HomeMain";

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <HomeMain/>,
      children: [
        
        {
           path : "/",
           element : <Navigate to={"/category/01"}/>
        },
        {
          path : "/category/:id",
          element : <CategoryNews/>,
          loader  : ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
      ],
    },
  ]);

  export default router

 