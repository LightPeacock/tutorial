// import logo from './logo.svg';
import Spline from '@splinetool/react-spline';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    {/* <Navbar title="TUTWEB"/><br></br>
    <br/> */}
    <Spline scene="https://prod.spline.design/ruk76yXA5V1Q4EN4/scene.splinecode" />
    <div className="container">
    <TextForm text="Enter your text You feel to analyze"/>
    </div>
    </>
  )
}

export default App;
