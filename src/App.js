import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Tracking from './pages/Tracking';
import Profile from './pages/Profile';
import { NotificationProvider } from './context/NotificationContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <NotificationProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/research" element={<Research />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/publications/:id" element={<Publications />} />
                <Route path="/services" element={<Services />} />
                <Route path="/tracking" element={<Tracking />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile/:id" element={<Profile />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </NotificationProvider>
    </UserProvider>
  );
}

export default App;
