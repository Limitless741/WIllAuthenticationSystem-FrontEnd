import React from 'react';
import { BrowserRouter as  Router,Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import Retrieve from './Retrieve';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to=".app/">Home</Link>
            </li>
            <li>
              <Link to="/add-user">Add User</Link>
            </li>
            <li>
              <Link to="/update-user">Update User</Link>
            </li>
            <li>
              <Link to="/retrieve">Retrieve</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/update-user" element={<UpdateUser />} />
          <Route path="/retrieve" element={<Retrieve />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
