import "./PersonMobile.css";
import { ReactComponent as Person1 } from "./images/person-1.svg";
import { ReactComponent as Person2 } from "./images/person-2.svg";
import { ReactComponent as Person3 } from "./images/person-3.svg";

function PersonMobile(props: { number: string }) {
  const person = (
    <div >
      { props.number === "1" && <Person1 id="person-1" /> }
      { props.number === "2" && <Person2 id="person-2" /> }
      { props.number === "3" && <Person3 id="person-3" /> }
    </div>
  );
  return person;
}

export default PersonMobile;

