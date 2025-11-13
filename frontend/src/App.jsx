import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
