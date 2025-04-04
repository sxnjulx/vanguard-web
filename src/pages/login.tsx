import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: any) => {
    e.preventDefault();
    localStorage.setItem("authToken", "dummy-token"); // Mock authentication
    navigate("/admin"); // Redirect to dashboard
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-6 rounded shadow-lg" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="block border p-2 w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block border p-2 w-full mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
