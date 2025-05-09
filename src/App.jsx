import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';

function App() {


  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={ <About/> } />
          <Route path='/projects' element={ <Projects/> } />
          <Route path='/contact' element={ <Contact/> }/>
        </Routes>
    </Router>
  )
}

export default App;
