
import { Route,Routes} from 'react-router-dom';
import './App.css';
import { AuthContextProvider } from "./context/authContext";
import Navbar from './component/Navbar';
import Home from './pages/home';
import Signup from './pages/signup';
import Account from './pages/account';
import Login from './pages/login';
import ProtectorRoute from './component/protectorRoute';


function App() {
  return (
    <>
     <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/account' element={<ProtectorRoute>
          <Account/>
          </ProtectorRoute>}/>
      </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
