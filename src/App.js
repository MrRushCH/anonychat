import './App.css';
import config from "./firebase/firebaseConfig";
import firebase from "firebase";

firebase.initializeApp(config);
const database = firebase.database();

function App() {

  return (
    <div className="App">
      <div></div>
    </div>
  );
}

export default App;
