import "./App.css";
import LoginPage from "./Components/RegisterContent/LoginPage/LoginPage";
import Home from "./Components/AllContent/HomePage/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "./Context/AuthContext";
import Loader from "./Components/Loader/Loader";
import 'bootstrap/dist/css/bootstrap.min.css';


//this app.js file contains the main component of the application.
function App() {
  const { userLoggedIn } = useAuth();

  //(localStorage.getItem("users") == undefined || localStorage.getItem("users") == null) ? <LoginPage/> : <Home/>
  // user ? <Home/> : <LoginPage/>
  return (
    <div className="App">
      {<LoginPage/>}
    </div>
  );
}

export default App;
