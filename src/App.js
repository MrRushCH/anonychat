import { useState } from 'react';
import './App.css';
import User from "./User";

function App() {
  const [user, setUser] = useState();
  if(!user) {
    User().then((res) => {
      setUser(res);
    })
  }
  return (
    <div className="App">
      <div>
        {user?user.uid:"creating user..."}
      </div>
    </div>
  );
}


export default App;
