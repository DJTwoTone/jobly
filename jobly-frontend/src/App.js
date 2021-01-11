import React, { useEffect, useState } from 'react';
import { decode } from 'jsonwebtoken'
import Routes from './Routes'; 
import useLocalStorage from './hooks/useLocalStorage';
// import logo from './logo.svg';
import './App.css';
import JoblyApi from './JoblyApi';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './UserContext';
import Nav from './Nav';

export const TOKEN_ID = "jobly-token";

function App() {
  const [user, setUser] = useState(null);

  const [token, setToken] = useLocalStorage(TOKEN_ID)

  useEffect(() => {
    async function getUser() {
      try {
        let { username } = decode(token);
        let user = await JoblyApi.getUser(username);
        setUser(user);
      } catch (e) {
        setUser(null)
      }
    }
    getUser();
  }, [token]);

  function handleLogout() {
    setUser(null);
    setToken(null);
  }

  return (

    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className='App'>
          <Nav logout={handleLogout} />
          <Routes setToken={setToken} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>

  );
}

export default App;
