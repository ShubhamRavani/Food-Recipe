
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Login from './components/LoginPage/Login';

function App() {
  return (
    <div className="App">
      
      <NavBar />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
       
    </div>
  );
}

export default App;
