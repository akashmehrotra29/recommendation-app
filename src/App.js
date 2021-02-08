import React, { useState } from "react";
import logo from "./logo.jpg";
// const logo = require('./logo.jpg);
import "./styles.css";

var talksDB = {
  Technology: [
    {
      name: "This is what happens when you reply to spam email - James Veitch",
      rating: "4.5/5"
    },
    {
      name: "The agony of trying to unsubscribe - James Veitch",
      rating: "4.0/5"
    }
  ],
  Entertainment: [
    {
      name: "Inside the mind of a master procrastinator - Tim Urban",
      rating: "4.5/5"
    },
    { name: "The orchestra in my mouth - Tom Thum", rating: "4.0/5" }
  ],
  Business: [
    { name: "How great leaders inspire action - Simon Sinek", rating: "4.5/5" },
    { name: "The puzzle of motivation - Dan Pink", rating: "4.0/5" }
  ]
};

export default function App() {
  var [currGenre, setGenre] = useState("Entertainment");

  function clickHandler(genre) {
    return setGenre(genre);
  }

  return (
    <div className="App">
      <img style={{ maxHeight: "10rem" }} src={logo} alt="Logo" />
      {/* <h1>Recommended <span style={{color:"#e62b1e"}}>TED</span> Talks</h1> */}
      <p>Check out most viewed talks of different genre</p>

      <div>
        {Object.keys(talksDB).map((genre) => (
          <button
            key={genre}
            style={{
              padding: "0.8rem",
              backgroundColor: "#e62b1e",
              color: "white",
              margin: "0.8rem",
              borderRadius: "1rem",
              borderWidth: "0",
              fontWeight: "bold"
            }}
            onClick={() => clickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr style={{ borderTop: "2px dashed #e62b1e" }} />
      <div>
        <ul style={{ paddingInlineStart: "0rem" }}>
          {talksDB[currGenre].map((talk) => (
            <li
              key={talk.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #e62b1e",
                margin: "1rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "large" }}>{talk.name}</div>
              <div
                style={{
                  fontSize: "smaller",
                  fontWeight: "bold",
                  padding: "0.5rem 0rem 0rem 0rem"
                }}
              >
                {talk.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
