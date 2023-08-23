import React from 'react';
import Link from "next/link";
import logo from "../../public/images/logo.png"

const Logo = () => {
    return (

            <Link className="navbar-brand" href="/">
                <img src={logo.src} alt="OmniOutReach"/>
            </Link>

    );
};

export default Logo;
