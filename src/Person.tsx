import "./Person.css";
import { ReactComponent as Person1 } from "./images/person-1.svg";
import { ReactComponent as Person2 } from "./images/person-1.svg";
import { ReactComponent as Person3 } from "./images/person-1.svg";

function Person(props: { number: string }) {
  const person = (
    <div className="Person" onClick={() => {
      openChatApp(props.number)
     }}>
      { props.number === "1" && 
        <>
          <Person1 id="person-1" />
          <div id="div-telegram-logo">
            <img width="70px" height="70px" onClick={() => openChatApp(props.number)} src="https://chagai.website/Telegram.png"></img>
          </div>
        </>
      }
      { props.number === "2" && <Person2 id="person-2" /> }
      { props.number === "3" && <Person3 id="person-3" /> }
    </div>
  );
  return person;
}

function openChatApp(number: string) {
  { number === "1" && openTelegram() }
  { number === "2" && <Person2 id="person-2" /> }
  { number === "3" && <Person3 id="person-3" /> }
}

function openTelegram() {
  window.open("https://t.me/chagai", '_blank')?.focus();
}



export default Person;

