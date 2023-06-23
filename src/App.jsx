import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/notfound/notfound'; 
import Userprofile from './pages/userProfiles/users';
import Home from './pages/Home/Home';
import Mainpagebfl from './pages/mainpagebeforeLogin/mainpgbfLogin';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp'; 
import BrowsePage from './pages/BrowsePage/BrowsePage';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Mainpagebfl />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
