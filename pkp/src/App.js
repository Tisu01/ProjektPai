import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import 'antd/dist/antd.min.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/users" element={<Users />}/>
        </Routes>
       </BrowserRouter>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
  }
export default App;

