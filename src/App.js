import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {UserContext} from './UserContext';
import Chat from './component/chat/Chat';
import Home from './component/home/Home';
import Navbar from './component/layout/Navbar';
import Singup from './component/auth/Singup';
import Login from './component/auth/Login';

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const verifyuser = async () => {
  
    try {
    const res = await fetch('http://localhost:5000/verifyuser',
      {
        credentials: 'include',
        headers: {'Content-Type': 'application/json'}
    });
    const data = await res.json()
    setUser(data)
    } catch (error) {
      console.log(error)
    }
  }
    verifyuser()
  }, [])
  return (
    <Router>
    <div className="App">
      <UserContext.Provider value={{user,setUser}}>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/chat/:room_id/:room_name" component={Chat} />
          <Route path="/signup" component={Singup} />
          <Route path="/login" component={Login} />
        </Switch>
      </UserContext.Provider>
      </div>
    </Router>

  );
}

export default App;
