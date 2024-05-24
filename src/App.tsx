import { useRoutes } from "react-router-dom"
import routes from "./routes"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { useEffect,useState } from "react"
import Login from "./pages/Login"


function App() {

  const currentPath = window.location.pathname;
  const [isLoginRoute,setIsLoginRoute] = useState<boolean>(false)


  useEffect(() => {
  if(currentPath == '/login'){
    setIsLoginRoute(true)
  }
  },[])



  const router = useRoutes(routes)

  return (
    <>
      {isLoginRoute ? <Login/> :
    
     <div className="h-dvh flex justify-between p-1.5 xs:p-5 xs:gap-x-22 xl:gap-x-2.5">
      <div className="w-[80px] ">
        <Sidebar />
      </div>
      
      <div className="flex-1">
        <Header/>
        {router}
      </div>
    </div>
}
    </>
   
  )
}

export default App
