import React from 'react';
import Deck from "./Deck"

function App() {
  const containerStyle = {
    backgroundImage: `url("https://media.istockphoto.com/id/672556284/photo/green-felt-and-playing-chips-abstract-background.jpg?s=612x612&w=0&k=20&c=qCon6tBWqG3-dLMxVkTlOA7d5QKD6KC8W32p3H2N-MQ=")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  }
  return (
      <div style={containerStyle}>
        <Deck />
      </div>
  );
}

export default App;
