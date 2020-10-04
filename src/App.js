import React from 'react';
import './App.css';
import ReactLivestream from 'react-livestream'

function OfflineComponent() {
  return (
    <div className="videoWrapper">
      <p>I am offline</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="videoWrapper">
        <ReactLivestream
          platform="youtube"
          youtubeApiKey={'AIzaSyD-qaLY3Yeu1fXZlM6tkdeDY4RtoFWNaC8'}
          youtubeChannelId="UC4PbwlZEMerIy6dmKGPE3EQgVebQ"
          offlineComponent={OfflineComponent()}
        />
      </div>
    </div>
    
  );
}

export default App;
