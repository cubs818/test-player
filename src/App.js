import React from "react";
import "./styles.css";
import VideoPlayer from "./components/Video";

export default function App() {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    preload: "auto",
    liveui: true,
    usingNativeControls: false,
    playbackRates: [0.5, 1, 1.25, 1.5, 2, 4, 8],
    responsive: true,
    suppressNotSupportedError: false,
    userActions: {
      hotkeys: true
    },
    html5: {
      vhs: {
        overrideNative: true
      }
    },
    sources: [
      {
        src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
        type: "application/x-mpegURL"
      }
    ],
    errorDisplay: false
  };
  return (
    <div>
      <VideoPlayer {...videoJsOptions} style={{ height: "100%" }} />
    </div>
  );
}
