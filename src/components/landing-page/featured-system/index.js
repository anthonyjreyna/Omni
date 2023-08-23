import React from 'react';
import Title from "../../custom-component/Title";
import SystemCard from "./SystemCard";
import done_for_you from "../../../../public/images/done.png"
import results_driven from "../../../../public/images/drive.png"
import support from "../../../../public/images/support.png"
import guaranteed_results from "../../../../public/images/guarantee.png"
const systemData=[{
    id:1,
    image:done_for_you.src,
    title:"Done-For-You",
    subTitle:"We generate, qualify, and book the leads that fit your Ideal Customer Profile."
},{
    id:2,
    image:results_driven.src,
    title:"Results-Driven",
    subTitle:"Pay-per-meeting with guaranteed results or full money-back refund."
},{
    id:3,
    image:support.src,
    title:"1-1 Support",
    subTitle:"You’ll have full access to our team via Slack and regular 1-1 sessions via zoom."
},{
    id:4,
    image:guaranteed_results.src,
    title:"Guaranteed Results",
    subTitle:"We only work with clients we are 100% sure we can deliver results to. Let chat to see if we can help."
}]


const FeaturedSystem = () => {
    return (
        <>
            <section className="outreach-system-section">
                <div className="cs-container">
                    <Title text="We Build High-Converting Outreach Systems. Guaranteed."/>
                    <div className="system-info-container">
                        {systemData?.length >0 &&
                        systemData?.map((system,index)=>{
                            return(<SystemCard key={index} system={system} />)
                        })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedSystem;
