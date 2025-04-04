import { Outlet, Navigate } from "react-router-dom";

const AdminLayout = () => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Replace with actual auth logic

  return isAuthenticated ? (
    <div>
      <h2>Admin Panel</h2>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminLayout;
