import "./App.js";
import './App.scss';
 //import HomePage from "./Pages/Home/Index";
//import AboutPage from './Pages/About/Index';
//import AboutTry from "./Try/About/try/Index";
import DashboardPage from "./Pages/Home/Dashboard/Index";


function App(){
  return (
    <div className='App'>
      {/* <HomePage/> */}
      {/* <AboutPage /> */}
      {/* <AboutTry/> */}
      <DashboardPage/>
    </div>
  )
}

export default App;