import React, { useState, useRef, useEffect } from 'react';
import { Player, BigPlayButton } from 'video-react';
import 'video-react/styles/scss/video-react.scss';

const VideoFile = () => {
  const [playerSource] = useState(
    'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
  );
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.load();
    }
  }, [playerSource]);

  return (
    <div>
      <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
        <BigPlayButton position="center" />
      </Player>
    </div>
  );
};

export default VideoFile;
