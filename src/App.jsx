import { useState } from 'react';
import SimpleVideoPlayer from './SimpleVideoPlayer.jsx';

function App() {
  const [count, setCount] = useState(0);
  const temp_video = "https://pub-a919e0e7442047299d7072ac1b2ab5d0.r2.dev/video.mp4";

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Vite + React</h1>

      <div className="card">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md" 
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>

      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

      {/* Render the video player */}
      <SimpleVideoPlayer videoSrc={temp_video} />
    </div>
  );
}

export default App;
