import "./topbar.scss";
import { Person, Mail,LinkedIn,GitHub } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            DEV
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9140431544</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>ajita00054@gmail.com</span>
          </div>
          <a href="https://www.linkedin.com/in/ajita-mishra-5a4553170/">
          <div className="itemContainer">
           <LinkedIn className="icon"/>
          </div>
          </a>
          <a href="https://github.com/ajitamishra">
          <div className="itemContainer">
            <GitHub className="icon" />
          </div>
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
