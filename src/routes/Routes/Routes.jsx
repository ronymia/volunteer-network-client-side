import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages";
import { UserAuth, MainLayouts } from "../../layouts";
import { Login, Register } from "../../pages/Auth";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <MainLayouts />,
          children: [
               {
                    index: true,
                    element: <Home />
               }
          ]
     },
     {
          path: "/auth",
          element: <UserAuth />,
          children: [
               {
                    path: "/auth/register",
                    element: <Register />
               },
               {
                    path: "/auth/login",
                    element: <Login />
               }
          ]
     }
]);