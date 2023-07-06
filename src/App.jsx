import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/notfound/notfound'; 
import Userprofile from './pages/userProfiles/users';
import Home from './pages/Home/Home';
import Mainpagebfl from './pages/mainpagebeforeLogin/mainpgbfLogin';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp'; 
import BrowsePage from './pages/BrowsePage/BrowsePage';
import MyList from './pages/mylist/mylist';
import MainpgbfLogin from './pages/mainpagebeforeLogin/mainpgbfLogin';
import NewPopular from './pages/new&popular/new&popular';
import Movies from './pages/movies/movies';
import TvShow from './pages/tvShow/tvShow';
function App() {
  return (

    <Router>
      <Routes> 
        <Route path="/" element={<Mainpagebfl />} />
        <Route path="/browse" element={<BrowsePage/>} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mainpage" element={<MainpgbfLogin />} />
        <Route path="/mylist" element={<MyList />}/>
        <Route path="/Newpop" element={<NewPopular />}/>
        <Route path="/Movies" element={<Movies />}/>
        <Route path="/tvShow" element={<TvShow/>}/>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
