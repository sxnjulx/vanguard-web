import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "../layouts/publicLayout";
import AdminLayout from "../layouts/adminLayout";
import Home from "../pages/home";
import About from "../pages/aboutus";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <Dashboard /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
