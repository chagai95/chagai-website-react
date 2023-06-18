import "./VideoCall.css";

function VideoCall() {
  return (
    <div className="VideoCall">
      <iframe
        title="Video call"
        id="iFrameJitsi"
        allow="camera; microphone; fullscreen; display-capture; autoplay"
        src="https://allo.bim.land//chagaiTalkNow#config.disableDeepLinking=true
                    &interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false
                    &interfaceConfig.DISABLE_JOIN_LEAVE_NOTIFICATIONS=true
                    &config.startWithVideoMuted=true
                    &config.startWithAudioMuted=true
                    &config.disableInitialGUM=true
                    &config.prejoinPageEnabled=false
                    &config.enableClosePage=true
                    &config.enableNoisyMicDetection=false
                    &config.p2p.enabled=false
                    &interfaceConfig.TOOLBAR_BUTTONS=
                    %5B
                      %22microphone%22
                      %2C
                      %22camera%22
                      %2C
                      %22desktop%22
                      %2C
                      %22fullscreen%22
                      %2C
                      %22profile%22
                      %2C
                      %22settings%22
                      %2C
                      %22tileview%22
                      %2C
                      %22videoquality%22
                    %5D"
      ></iframe>
    </div>
  );
}

export default VideoCall;
