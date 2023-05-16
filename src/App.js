import './App.css';
import Navbar from './camponents/Header/Navbar';
import Herosection from './camponents/HeroSection/Herosection';
import MainBody from './camponents/Body/MainBody';
import ProfilePage from './camponents/Profile/ProfilePage';

function App() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <MainBody/>
      {/* <ProfilePage/> */}
      
    </div>
  );
}

export default App;
