import './IntroVideo.css';

function IntroVideo() {
  return (
    <div className="IntroVideo">
      <iframe
          width="30%"
          height="288px"
          style={{ border: "0" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/61P9ipj3BAM?autoplay=1&rel=0"
          allowFullScreen
        ></iframe>
    </div>
  );
}

export default IntroVideo;