import { createBrowserRouter } from "react-router";
import MainLayout from "./MainLayout";
import Home from "./screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            index:true,
            element:<Home/>
        }
    ]
  },
]);
export default router;