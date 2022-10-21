
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';


function App() {
  return (
    <Router>
    <div>

    </div>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/detail/:id" element={<Detail />} />
    </Routes>
  </Router>
  );
}

export default App;
