import "./ChatBubbleMobile.css";
import { ReactComponent as ChatBubble1 } from "./images/chat-bubble-1.svg";
import { ReactComponent as ChatBubble2 } from "./images/chat-bubble-2.svg";
import { ReactComponent as ChatBubble3 } from "./images/chat-bubble-3.svg";

function ChatBubbleMobile(props: { number: string; }) {
  return (
    <div >
      { props.number === "1" && <ChatBubble1 id="chat-bubble-mobile-1"/> }
      { props.number === "2" && <ChatBubble2 id="chat-bubble-mobile-2"/> }
      { props.number === "3" && <ChatBubble3 id="chat-bubble-mobile-3"/> }
    </div>
  );
}

export default ChatBubbleMobile;