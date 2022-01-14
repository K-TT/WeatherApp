import React from 'react';
const api = {
  key: "9820c5639a4f86f59ebb8b89ceffe3b0",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div className="location-box">
          <div className="location"></div>
          <div className="date"
        </div>
      </main>
    </div>
    );
}

export default App;