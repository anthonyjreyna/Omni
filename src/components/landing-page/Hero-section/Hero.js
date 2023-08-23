import React from 'react';
import Link from "next/link";
import hero_bg_left_image from "../../../../public/images/hero-bg-left.png"
import CustomImageContainer from "../../custom-component/CustomImage";
import hero_bg_right_image from "../../../../public/images/hero-bg-right.png";
import HeroSectionMiddle from "./HeroSectionMiddle";
import HeroImage from "./HeroImage";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="cs-container">
                <div className="content">
                    <HeroImage image={hero_bg_left_image.src} alt="left-img" imageStyle="img-container-left" />
                      <HeroSectionMiddle/>
                    <HeroImage image={hero_bg_right_image.src} alt="right-img" imageStyle="img-container-right" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
