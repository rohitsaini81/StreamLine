import { useState } from 'react';
import SimpleVideoPlayer from './SimpleVideoPlayer.jsx';

function App() {
  const [count, setCount] = useState(0);
  const temp_video = "https://videos.pexels.com/video-files/5924381/5924381-hd_1080_1920_30fps.mp4";

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
      <SimpleVideoPlayer publicId={temp_video} />
    </div>
  );
}

export default App;
