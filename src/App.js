import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {UserContext} from './UserContext';
import Chat from './component/chat/Chat';
import Home from './component/home/Home';
import Navbar from './component/layout/Navbar';
import Singup from './component/auth/Singup';
import Login from './component/auth/Login';

function App() {
  const [user, setUser] = useState(null)
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
