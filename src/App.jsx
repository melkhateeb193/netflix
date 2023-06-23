import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/notfound/notfound';
import Browse from './pages/browseByLanguages/browse';
import Userprofile from './pages/userProfiles/users';
import Home from './pages/Home/Home';
import Mainpagebfl from './pages/mainpagebeforeLogin/mainpgbfLogin';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/mainpage" element={<Mainpagebfl />} />
        <Route path="/browse" element={<Browse />} />
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
