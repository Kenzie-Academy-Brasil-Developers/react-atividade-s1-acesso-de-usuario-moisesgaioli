import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import RestrictedPage from "./components/RestrictedPage/";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Moisés";

  function login () {
    setIsLoggedIn(true);
  }

  function logout () {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <header className="App-header">

        <RestrictedPage isLoggedIn={isLoggedIn} user={user} login={login} logout={logout} />

      </header>
    </div>
  );
}

export default App;
