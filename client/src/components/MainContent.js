import React from 'react';
import financialNewYearImage from '../images/f-year-image.png'; 

function MainContent() {
  return (
    <main>
      <div className="illustration">
        <img
          src={financialNewYearImage}
          alt="Financial New Year Image"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className="greeting">
        <h1>Wishing you sound financial decisions this</h1>
        <h2>Financial New Year</h2>
        <p>Business Name</p>
      </div>
    </main>
  );
}

export default MainContent;
