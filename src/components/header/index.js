import React from "react";
import Link from "next/link";
import Logo from "../Logo";

const HeaderComponent = () => {
  return (
    <>
      <nav className="navbar top-navbar sticky-top navbar-expand-lg">
        <div className="cs-container">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              {/*<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">*/}
              {/*    <path fill-rule="evenodd"*/}
              {/*          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>*/}
              {/*</svg>*/}
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav left-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#our-process">
                  Our Process
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#our-reviews">
                  Our Reviews
                </a>
              </li>
            </ul>
            <ul className="navbar-nav right-nav ms-auto">
              {/*<li className="nav-item">*/}
              {/*    <a href="#" className="nav-link btn btn-pulse">*/}
              {/*        Login*/}
              {/*    </a>*/}
              {/*</li>*/}
              <li className="nav-item">
                <a
                  href="#schedule"
                  className="nav-link btn btn-primary btn-pulse"
                >
                  Let’s Talk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
