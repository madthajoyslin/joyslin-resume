import {Routes,Route,BrowserRouter} from 'react-router-dom';
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Home from './component/Home';
import Education from './component/Education';
import Skills from './component/Skills';
import Contact from './component/Contact';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Education" element={<Education/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/Contact" element={<Contact/>}/>
     </Routes>
     
     </BrowserRouter> 
    </div>
  );
}

export default App;
