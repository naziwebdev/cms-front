import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Category from "./pages/Category";
import Tickets from "./pages/Tickets";
import Offs from "./pages/Offs";
import Costs from "./pages/Costs";
import Comments from "./pages/Comments";
import Login from "./pages/Login";

import IndexApps from "./pages/Apps/IndexApps";
import Todo from "./pages/Apps/Todo";
import Note from "./pages/Apps/Note";
import Calender from "./pages/Apps/Calender";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/users/:page", element: <Users /> },
  { path: "/products", element: <Products /> },
  { path: "/orders", element: <Orders /> },
  { path: "/category", element: <Category /> },
  { path: "/tickets", element: <Tickets /> },
  { path: "/offs/:page", element: <Offs /> },
  { path: "/costs", element: <Costs /> },
  { path: "/comments/:page", element: <Comments /> },
  {
    path: "/apps/*",
    element: <IndexApps />,
    children: [
      { path: "todo/:page", element: <Todo /> },
      { path: "note", element: <Note /> },
      { path: "calender", element: <Calender /> },
    ],
  },
];

export default routes;
