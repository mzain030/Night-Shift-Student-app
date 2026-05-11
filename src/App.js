import logo from './logo.svg';
import './App.css';
import ZainWork from './components/ZainWork';
import LatestWork from './components/LatestWork';
import Naseer from './components/Naseer';
import Saher from './components/Saher';
import Morning from './components/Morning';

function App() {
  return (
    <div className="App">
     {/* <ZainWork/> */}
     {/* <Naseer/> */}
     {/* <LatestWork/> */}
     <h2>  Saher  </h2>
     <h3> Muhammad Alyas </h3>
     <Saher/>
     <Morning/>
     <ZainWork/>
     <Naseer/>
     <h3>Muhammad Zain Naseer</h3>
     <h3>Muhammad Naseer Ul Haq</h3>
     <LatestWork/>
    </div>
  );
}

export default App;
