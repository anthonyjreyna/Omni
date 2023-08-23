import React from 'react';
import Link from "next/link";
import Title from "../../custom-component/Title";

const HeroSectionMiddle = () => {
    return (
        <>
            <div className="text-content">
              <Title text="Predictably Generate 30+ Meeting-Ready Leads Per Month, On A
                    Performance-Based Model"/>
                <p className="text mx-auto mb-0">We Find, Qualify, and Book Meetings With Your Dream Clients.
                    100% Done For You. Performance Based. Don’t Just Trust Us. Try Us.</p>
                <div className="btn-container">
                    <a href="#" className="btn btn-pulse"><span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                <path d="M7.132,1.519a1,1,0,0,1,1.736,0L15.145,12.5a1,1,0,0,1-.868,1.5H1.723a1,1,0,0,1-.868-1.5Z"
                      transform="translate(14) rotate(90)" fill="#fff"/>
              </svg>
              </span>Watch video</a>
                </div>
            </div>
        </>
    );
};

export default HeroSectionMiddle;
