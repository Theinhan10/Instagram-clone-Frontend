import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/HomePage/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
       {/**<LoginPage/>  */} 
       <Home/>

    </div>
  );
}

export default App;
