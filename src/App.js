import './App.css';
import './common.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { AuthenticationProvider } from './context/AuthenticationContext';
import Login from './components/Authentication/Login/Login';
import SignUp from './components/Authentication/SignUp/SignUp';
function App() {
  return (
    <div>
      <AuthenticationProvider>
       <Router>
       <Navbar/>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path ="/signup" element={<SignUp/>}/>
            <Route exact path="/dashboard" element={<Sidebar/>}/>
            <Route exact path="/userProfile" element={<UserProfile/>}/>
          </Routes>
       </Router>
       </AuthenticationProvider>
    </div>
  );
}

export default App;
