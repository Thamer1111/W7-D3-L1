import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePg from "../pages/HomePg";



const router = createBrowserRouter([
  {
    path: "/", element: <HomePg />
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
