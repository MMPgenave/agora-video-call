import { useState } from "react";
import "./App.css";
import { VideoRoom } from "./components/VideoRoom";

function App() {
  const [joined, setJoined] = useState(false);

  return (
    <div className="App">
      <h1>ویدیو چت</h1>

      {!joined && <button onClick={() => setJoined(true)}>پیوستن به اتاق</button>}

      {joined && (
        <>
          <button onClick={() => setJoined(false)}>رفتن به لابی</button>
          <VideoRoom />
        </>
      )}
    </div>
  );
}

export default App;
