import { Link } from "@mongez/react-router";
import { useState } from "react";
import { GoThreeBars, GoX } from "react-icons/go";
import "./Home.css";

export default function Header() {
  const [click, setClick] = useState(false);
  const clickHandeler = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="header-container">
        <nav>
          <div className="logo-container">
            <h3>Router Mongez</h3>

            <div className="menu-icon" onClick={() => clickHandeler()}>
              {click ? <GoX size={30} /> : <GoThreeBars size={30} />}{" "}
            </div>
          </div>

          <ul className={click ? "show" : ""}>
            <Link onClick={() => clickHandeler()} to="/">
              Home
            </Link>
            <Link onClick={() => clickHandeler()} to="/contact">
              Contact Us
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
