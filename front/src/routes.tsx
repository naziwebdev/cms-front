import Home from "./pages/Home"
import Users from "./pages/Users"
import Products from "./pages/Products"
import Orders from "./pages/Orders"
import Category from "./pages/Category"
import Tickets from "./pages/Tickets"
import Offs from "./pages/Offs"
import Costs from "./pages/Costs"
import Comments from "./pages/Comments"

import IndexApps from './pages/Apps/IndexApps'
import Todo from './pages/Apps/Todo'
import Note from './pages/Apps/Note'
import Calender from './pages/Apps/Calender'


const routes = [
    { path: '/', element: <Home /> },
    { path: '/users', element: <Users /> },
    { path: '/products', element: <Products /> },
    { path: '/orders', element: <Orders /> },
    { path: '/category', element: <Category /> },
    { path: '/tickets', element: <Tickets /> },
    { path: '/offs', element: <Offs /> },
    { path: '/costs', element: <Costs /> },
    { path: '/comments', element: <Comments /> },
    {
        path: '/apps/*', element: <IndexApps />, children: [

            { path: 'todo', element: <Todo /> },
            { path: 'note', element: <Note /> },
            { path: 'calender', element: <Calender /> }
        ]
    }

]

export default routes