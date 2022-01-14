import React from 'react';
const api = {
  key: "9820c5639a4f86f59ebb8b89ceffe3b0",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const dateBuilder = (d) => { 
    let month = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday","Tuesday","Wednesday", "Thursday","Friday", "Saturday"];
  }

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
          <div className="location">New York City, US</div>
          <div className="date">{ dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
    );
}

export default App;