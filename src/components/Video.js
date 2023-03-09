/* eslint-disable consistent-return */
import React, { useCallback, useEffect, useState } from "react";

import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-landscape-fullscreen";

const VideoPlayer = React.memo((props) => {
  const [videoEl, setVideoEl] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => setLoading(false), [loading]);

  const onVideo = useCallback((el) => {
    setVideoEl(el);
  }, []);

  useEffect(() => {
    if (videoEl == null) return;
    const player = videojs(videoEl, props);
    player.on("error", () => {
      props.setOpen(true);
    });

    if (window.screen) {
      player.landscapeFullscreen({
        fullscreen: {
          enterOnRotate: true,
          alwaysInLandscapeMode: true,
          iOS: false
        }
      });
    }

    return () => {
      // eslint-disable-next-line
      return player.dispose();
    };
  }, [props, videoEl]);
  if (props.loading) return null;
  return (
    /* wrap the player in a div with a `data-vjs-player` attribute
      so videojs won't create additional wrapper in the DOM */
    <div data-vjs-player style={{ height: "400px" }}>
      <video
        ref={onVideo}
        className={`video-js  vjs-big-play-centered`}
        playsInline
      >
        <track default kind="captions" srcLang="en" />
      </video>
    </div>
  );
});

export default VideoPlayer;
