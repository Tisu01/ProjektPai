import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import ForgetPassword from './views/ForgetPassword';
import 'antd/dist/antd.min.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/forget-password" element={<ForgetPassword />}/>
        </Routes>
       </BrowserRouter>
  );
}

function About() {
  return <h2>About</h2>;
}


export default App;

