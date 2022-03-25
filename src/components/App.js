import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'

import '../App.css';

import Layout from './layout/Layout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Picture from './pages/Picture';

function App() {
    // state with the user data when the user is logged in
    const [currentUser, setCurrentUser] = useState(null)
    // useEffect that handles localstorage if the user navigates away from the page/refreshes
    useEffect(() => {
      const token = localStorage.getItem('jwt')
      // if a token is found, log the user in; otherwise, make sure they are logged out
      if (token) {
        setCurrentUser(jwt_decode(token))
      } else {
        setCurrentUser(null)
      }
    }, [])
    // logout handler function that deletes a token from localstorage
    const handleLogout = () => {
      // remove the token from local storage
      if (localStorage.getItem('jwt')) localStorage.removeItem('jwt')
    
      // set the user state to be null
      setCurrentUser(null)
    }

    return (
      <div className="App">
        <Router>
          <Layout handleLogout={handleLogout} currentUser={currentUser} >
                <Routes>
                    
                    <Route path="/" element={<Landing />} />

                    <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />

                    <Route path="/register" element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />} />

                    <Route path='/about' element={<About />} />

                    <Route path='/feed' element={currentUser ? <Feed currentUser={currentUser} /> : <Navigate to='/login' />} />

                    <Route path='/profiles/:id' element={<Profile />} />

                    <Route path='/pictures/:id' element={<Picture />} />

                </Routes>
          </Layout>
        </Router>
      </div>
    );
}

export default App;