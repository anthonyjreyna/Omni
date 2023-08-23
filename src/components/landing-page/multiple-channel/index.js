import React from 'react';
import TextSection from "../personalize-sales/TextSection";
import CustomImageContainer from "../../custom-component/CustomImage";
import multiple_channel from "../../../../public/images/b2b.png";

const MultipleChannel = () => {
    return (
        <>
            <section className="multiple-channel-section">
                <div className="cs-container">
                    <div className="channel-container">
                        <TextSection title="The Best B2b Prospects Require Consistent Follow-Up Across Multiple Channels." description="Multi-channel outreach gives you the best shot at starting a conversation with your
              prospect. You can engage your dream clients on the channel of their choice, and as you reach out on
              different channels, they will take note."/>
                        <CustomImageContainer src={multiple_channel.src} imageStyle="" alt="prospect"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MultipleChannel;
