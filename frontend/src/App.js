// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';
import Logout from './components/Auth/logout';
import ProtectedRoute from './components/protectedRoute';
import Profile from './pages/profile';



function App() {

  const [user, setUser]= useState(null);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route
          path="/profile"
          element={
            <ProtectedRoute>
                <Profile user={user} />
            </ProtectedRoute>
          }
        />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
