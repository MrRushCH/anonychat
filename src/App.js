import { useState } from 'react';
import './App.css';
import User from "./User";
import database from "./firebase/firebaseConfig";
import Dispose from "./Dispose";


function App() {
  const [user, setUser] = useState();
  const [memberCount, setMemberCount] = useState();
  if(!user) {
    User().then((res) => {
      setUser(res);
    })
  }
  window.onbeforeunload = function (e) {
    Dispose(user);
};
  return (
    <div className="App">
      <div>
        {user && (
          <div>
            <p>{user.uid}</p>
            <p>{user.room.rid}</p>
          </div>
        )}
      </div>
    </div>
  );
}


export default App;
