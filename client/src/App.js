import React from 'react';
import Header from '../src/components/Header';
import MainContent from '../src/components/MainContent';
import Footer from '../src/components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
