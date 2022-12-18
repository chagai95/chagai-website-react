import './IntroVideo.css';

function IntroVideo() {
  return (
    <div className="IntroVideo">
      <iframe
          title="Intro video"
          width="62%"
          height="280px"
          style={{ border: "0" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/61P9ipj3BAM"
          allowFullScreen
        ></iframe>
    </div>
  );
}

export default IntroVideo;