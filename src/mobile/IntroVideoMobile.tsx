import './IntroVideoMobile.css';

function IntroVideoMobile() {
  return (
    <div className="IntroVideoMobile">
      <iframe
          width="55%"
          height="100px"
          style={{ border: "0" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/61P9ipj3BAM?autoplay=1&rel=0"
          allowFullScreen
        ></iframe>
    </div>
  );
}

export default IntroVideoMobile;