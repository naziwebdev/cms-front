import { useNavigate, useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Login from "./pages/Login";

function App() {
  const currentPath = window.location.pathname;
  const [isLoginRoute, setIsLoginRoute] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPath == "/login") {
      setIsLoginRoute(true);
    }

    const isAuthUser = async () => {
      const res = await fetch("http://localhost:4000/v1/auth/me", {
        credentials: "include",
      });
      const result = await res.json();

      if (!result) {
        setIsLoginRoute(true);
        return navigate("/login");
      }

      if (result.role !== "ADMIN") {
        setIsLoginRoute(true);
        return navigate("/login");
      }
    };

    isAuthUser();
  }, []);

  const router = useRoutes(routes);

  return (
    <>
      {isLoginRoute ? (
        <Login />
      ) : (
        <div className="xs:gap-x-22 flex h-dvh justify-between p-1.5 xs:p-5 xl:gap-x-2.5">
          <div className="w-[80px] ">
            <Sidebar />
          </div>

          <div className="flex-1">
            <Header />
            {router}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
