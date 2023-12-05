import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import SamuraiLogo from "../assets/SamuraiLogo.png";
import "../styles/header.scss";

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="full-logo">
          <Link to="/">
            <img className="samuraiLogo" src={SamuraiLogo} alt="SamuraiLogo" />
          </Link>
          <h1 className="site-title">TvAnimeTracker</h1>
        </div>
        <button type="button" className="button-connexion">
          <MdAccountCircle className="account-icon" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
