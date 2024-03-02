import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Mainpage/Navbar';
import Body from './Components/Mainpage/body';
import SignInLayout from './Pages/Signin';
import SignUpLayout from './Pages/Signup';
import TripForm from './Pages/CreateTrip';
import Approute from './Router/Routes';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    {/* <Body/>
    <SignInLayout/>
    <SignUpLayout/>
    <TripForm/> */}
    <Approute/>
    </div>
  );
}

export default App;
