import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import { AuthContextProvider } from "./context/Authcontext";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Account from "./pages/account";

import Protectedroute from './component/protectedroute';



function App() {
  return (
    <>
    
    <AuthContextProvider>
    <Navbar></Navbar>
    <Routes>

<Route path="/" element={<Home></Home>}/>
<Route path='/login' element={<Login></Login>} />
<Route path='/signup' element={<Signup></Signup>} />
<Route path='/account' element={<Protectedroute><Account /></Protectedroute>} />
</Routes>

    </AuthContextProvider>

    
    
    </>
  );
}

export default App;
