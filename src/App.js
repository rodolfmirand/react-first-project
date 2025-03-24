import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/empresa" element={<Empresa />} />
      </Routes>
    </Router>
  )
}

export default App;
