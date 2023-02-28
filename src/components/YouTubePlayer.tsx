import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"

type YouTubePlayerProps = {
  videoEmbedURL: string;
}

export const YouTubePlayer = forwardRef(({videoEmbedURL}: YouTubePlayerProps, ref) => {
  const player: any = useRef();

  useImperativeHandle(ref, () => ({
    playVideo, pauseVideo, setVolume
  }));

  useEffect(() => {
    // Add YouTube iFrame API script to document
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      (window as any).onYouTubeIframeAPIReady = initPlayer;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    } else {
      initPlayer();
    }
  }, [])

  const initPlayer = () => {
    player.current = new (window as any).YT.Player("youtube-player", {
      events: {
        // onReady: onReady
      }
    })
  }

  const playVideo = () => {
    player.current.playVideo();
  }

  const pauseVideo = () => {
    player.current.pauseVideo();
  }

  const setVolume = () => {
    //TODO
  }

  return(
    <iframe id="youtube-player" src={`${videoEmbedURL}&controls=0&enablejsapi=1`}/>
  )
})