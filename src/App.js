import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Dashboard from "./Pages/Dashboard";
import Tea from "./Pages/Tea";
import Coffee  from "./Pages/Coffee";
import Softdrinks  from "./Pages/Softdrinks";
import Wine  from "./Pages/Wine";
import Whisky  from "./Pages/Whisky";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Router>

        
        <Nav />
        <Routes>
          
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/Sign_up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tea" element={<Tea/>}/>
          <Route path="/coffee" element={<Coffee/>}/>
          <Route path="/softdrinks" element={<Softdrinks/>}/>
          <Route path="/wine" element={<Wine/>}/>
          <Route path="/whisky" element={<Whisky/>}/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
