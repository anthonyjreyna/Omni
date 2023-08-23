import React from "react";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <div>
      <footer>
        <div className="cs-container">
          <div className="footer-container">
            <a className="link-element" href="#our-process">
              Our Process
            </a>
            <a className="link-element" href="#our-reviews">
              Our Reviews
            </a>
            <a className="link-element" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
