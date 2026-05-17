import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

//paginas importadas
import Home from './paginas/Home'
import Projects from './paginas/Projects'
import Contact from './paginas/Contact'
import About from './paginas/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
