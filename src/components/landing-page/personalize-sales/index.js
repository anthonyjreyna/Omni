import React from 'react';
import ImageSection from "./ImageSection";
import CustomImageContainer from "../../custom-component/CustomImage";
import sales_image from "../../../../public/images/personalize.png";
import TextSection from "./TextSection";

const PersonalizeSales = () => {
    return (
        <>
            <section className="personalize-sales-section">
                <div className="cs-container">
                    <div className="sales-info-container">
                        <CustomImageContainer src={sales_image.src} alt="personalize-sales" imageStyle=""/>
                        <TextSection title="Personalization + Scale = The Sales Holy Grail" description="Surveys say that you can get an edge over others when you add
                    personalization to email and get more replies from prospects. Without personalization, the chances
                    of the recipient opening the email are low. When a recipient feels that an email is relevant to
                    them, they are more likely to engage."/>
                    </div>
                </div>
            </section>

        </>
    );
};

export default PersonalizeSales;
