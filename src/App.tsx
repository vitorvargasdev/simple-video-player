import { useState, useEffect } from "react";
import './index.css'

function App() {
  const [url, setUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);

    if (currentUrl.length > 0) {
      setTimeout(() => setShow(true), 1000);
    }
  }, [currentUrl]);

  return (
    <div className="container">
      <div className="content">
        <h1 className="header">Video Player App</h1>
        <div className="inputContainer">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste video URL here..."
            className="input"
          />
          <button onClick={() => setCurrentUrl(url)} className="button">
            Load Video
          </button>
        </div>

        <div className="videoContainer">
          {show ? (
            <video width="100%" height="100%" controls className="video">
              <source src={currentUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="placeholder">
              <p className="placeholderText">Your video will appear here!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
