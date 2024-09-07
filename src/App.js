import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/Register.js";
import LoginPage from "./pages/Login.js";
import Dashboard from "./pages/Dashboard.js";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
