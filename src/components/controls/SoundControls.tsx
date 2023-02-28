import { useRef } from "react";
import { YouTubePlayer } from "../YouTubePlayer"

export const SoundControls = () => {
  const player: any = useRef();

  return (
    <>
      Sound
      <YouTubePlayer ref={player} videoEmbedURL="https://www.youtube.com/embed/0LwcvjNJTuM?start=288"/>
      <button onClick={() => player.current?.playVideo()}>play</button> 
      <button onClick={() => player.current?.pauseVideo()}>pause</button> 
      <button onClick={() => player.current?.setVolume()}>mute</button>
      {/* <iframe src="https://www.youtube.com/embed/0LwcvjNJTuM?start=288"/> */}
    </>
  )
}