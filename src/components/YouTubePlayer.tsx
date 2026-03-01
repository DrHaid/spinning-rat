import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

interface YouTubePlayerProps {
  videoEmbedURL: string;
  onPlayStateChange?: (isPlaying: boolean) => void;
  initialVolume?: number;
  width?: string;
  height?: string;
}

export interface YouTubePlayerRef {
  playVideo: () => void;
  pauseVideo: () => void;
  setVolume: (vol: number) => void;
}

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  setVolume: (volume: number) => void;
}

interface YTPlayerEvent {
  data: number;
}

interface YTPlayerOptions {
  events: {
    onReady: () => void;
    onStateChange: (event: YTPlayerEvent) => void;
  };
}

declare global {
  interface Window {
    YT?: {
      Player: new (elementId: string, options: YTPlayerOptions) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export const YouTubePlayer = forwardRef(
  (
    {
      videoEmbedURL,
      onPlayStateChange,
      initialVolume,
      width,
      height,
    }: YouTubePlayerProps,
    ref: ForwardedRef<YouTubePlayerRef>,
  ) => {
    const player = useRef<YTPlayer>(undefined);

    useImperativeHandle(ref, () => ({
      playVideo,
      pauseVideo,
      setVolume,
    }));

    useEffect(() => {
      // Add YouTube iFrame API script to document
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";

        window.onYouTubeIframeAPIReady = initPlayer;

        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      } else {
        initPlayer();
      }
    }, []);

    const initPlayer = () => {
      player.current = new window.YT!.Player("youtube-player", {
        events: {
          onReady: onPlayerReady,
          onStateChange: onStateChange,
        },
      });
    };

    const onPlayerReady = () => {
      player.current?.setVolume(initialVolume ?? 100);
    };

    const onStateChange = (e: YTPlayerEvent) => {
      const state = e.data;
      if (state === 1 || state === 3 || state === -1) {
        onPlayStateChange?.(true);
      } else {
        onPlayStateChange?.(false);
      }
    };

    const playVideo = () => {
      player.current?.playVideo();
    };

    const pauseVideo = () => {
      player.current?.pauseVideo();
    };

    const setVolume = (vol: number) => {
      const clampedVolume = Math.max(Math.min(100, vol), 0);
      player.current?.setVolume(clampedVolume);
    };

    return (
      <iframe
        id="youtube-player"
        style={{
          width: width,
          height: height,
          border: 0,
        }}
        src={`${videoEmbedURL}&controls=0&enablejsapi=1`}
      />
    );
  },
);
