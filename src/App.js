import './App.css';
import config from "./firebase/firebaseConfig";
import firebase from "firebase";
import User from "./User";
import database from "./firebase/firebaseConfig";

function App() {
  const user = new User();
  
  return (
    <div className="App">
      <div></div>
    </div>
  );
}


export default App;
