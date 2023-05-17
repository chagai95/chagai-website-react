import "./VideoCallMobile.css";

function VideoCallMobile() {
  return (
    <div className="VideoCallMobile">
      <iframe
        title="Video call"
        id="iFrameJitsi"
        allow="camera; microphone; fullscreen; display-capture; autoplay"
        src="https://meet.jit.si/chagaitalkNow#config.disableDeepLinking=true
                    &interfaceConfig.TOOLBAR_BUTTONS=
                    %5B
                      %22microphone%22
                      %2C
                      %22camera%22
                      %2C
                      %22download%22
                      %2C
                      %22tileview%22
                      %2C
                      %22etherpad%22
                    %5D
                    &interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false
                    &interfaceConfig.DISABLE_JOIN_LEAVE_NOTIFICATIONS=true
                    &config.startWithVideoMuted=true
                    &config.start  WithAudioMuted=true
                    &config.disableInitialGUM=true
                    &config.prejoinPageEnabled=false
                    &config.enableClosePage=true
                    &config.enableNoisyMicDetection=false
                    &config.p2p.enabled=false
              #zoom=30"
      ></iframe>
    </div>
  );
}

export default VideoCallMobile;