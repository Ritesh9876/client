import './App.css';
import './common.css'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      
       <Router>
       <Navbar/>
          <Routes>
            <Route exact path="/dashboard" element={<Sidebar/>}/>
            <Route exact path="/userProfile" element={<UserProfile/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
