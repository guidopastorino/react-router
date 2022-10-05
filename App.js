import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes, Link } from 'react-router-dom'

// https://reactrouter.com/en/6.4.1

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About Me</Link></li>
          <li><Link to={'/projects'}>Projects</Link></li>
          <li><Link to={'/contact'}>Contact Me</Link></li>
          <li><NavLink to={'/navlink'}>Navlink Toggles Active with a default 'active' class</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
}

export const Home = () => {
  return(
    <h1>Home Page</h1>
  )
}

export const About = () => {
  return(
    <h1>About Page</h1>
  )
}

export const Projects = () => {
  return(
    <h1>Projects Page</h1>
  )
}

export const Contact = () => {
  return(
    <h1>Contact Page</h1>
  )
}

export default App;
