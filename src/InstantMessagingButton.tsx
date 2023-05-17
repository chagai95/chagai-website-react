import "./InstantMessagingButton.css";
import {Link} from 'react-router-dom';

function InstantMessagingButton(props: { platform: string }) {
  const src: string = "https://chagai.website/" + props.platform + ".png"
  let toURL: string = "https://api.whatsapp.com/send?phone=41766524456"
  switch (props.platform) {
    case 'WhatsApp':
      toURL = "https://api.whatsapp.com/send?phone=41766524456"
      break;
    case 'Telegram':
      toURL = "https://telegram.me/chagai"
      break;
    case 'Messenger':
      toURL = "https://www.messenger.com/t/chagai95"
      break;
    default:
  }
  const instantMessagingButton = 
  <Link to={toURL}>
    <img className="bigIcons"
          src={src}
          alt={props.platform}
        />
  </Link>
    ;
  return instantMessagingButton;
}

export default InstantMessagingButton;

