import React from 'react';
import CustomImageContainer from "../../custom-component/CustomImage";
import prospect from "../../../../public/images/compititors.png"
import TextSection from "../personalize-sales/TextSection";

const ProspectsReach = () => {
    return (
        <>
            <section className="prospect-reach-section">
                <div className="cs-container">
                    <div className="sales-info-container">
                        <TextSection title="Reach Prospects Your Competitor Can’t." description="Prospecting plays an essential first step in generating new customers that result in high revenue.To prospect correctly, it’s important to know what your ideal customer looks like and where to find them. You want to make sure you’re knocking on the right doors."/>
                        <CustomImageContainer src={prospect.src} imageStyle="" alt="prospect"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProspectsReach;
