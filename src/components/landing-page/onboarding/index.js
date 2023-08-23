import React from 'react';
import Title from "../../custom-component/Title";
import OnboardCard from "./OnboardCard";
import LandingButton from "../../button/LandingBottun";
import SubTitle from "../../custom-component/SubTitle";



const onboardingData=[{
    id:1,
    count:"1",
    title:'Stage 1— Ideate',
    info:"This is where we help you clearly define your target audience & break it up into specific personas. After that we brainstorm relevant messaging per persona. As we are doing this our team will start setting up your email infrastructure based off your requirements. This includes domain/IP warmup and the necessary tools."
},{
    id:2,
    count:"2",
    title:'Stage 2— Test',
    info:"Once messaging and the audience is decided we begin experimenting.To do this we launch ‘micro’ campaigns and review the results in a qualitative manner.The goal is to identify (with data) messaging that resonates with the respective audience/persona.We will also identify which marketing channels compliment your email campaigns."
},{
    id:3,
    count:"3",
    title:'Stage 3— Scale',
    info:"Once the right cadence and messaging has been identified. We focus on the ‘winning’ campaign(s) and amplify. We double down on winning campaigns and continue to test copy to find additional winners."
},{
    id:4,
    count:"4",
    title:'Stage 4— Optimize',
    info:"We optimize and measure for one metric - prospects that are interested in a conversation (for outbound) or number of purchases/activations (for email marketing) This is done by frequently reviewing a campaigns performance to understand why we got these specific results and extrapolate valuable insights.These learnings are utilized in the launch of the next campaign."
}]

const Onboard = () => {
    return (
        <>
            <section className="onboarding-process-section" id="how-it-works">
                <div className="cs-container">
                    <div className="top-content d-flex flex-column justify-content-center align-items-center">
                        <Title text="How Our Onboarding Process Works"/>
                        <p className="text mb-0">Our process is methodical & data driven. The goal is to identify the
                            ‘right’ cadence and
                            message as per the respective persona.</p>
                    </div>
                    <div className="process-info-container mx-auto">
                        {onboardingData?.length >0 &&
                        onboardingData?.map((item,index)=>{
                            return <OnboardCard key={index} information={item}/>
                        })
                        }
                    </div>
                </div>
                <LandingButton name="Build My Outreach Engine"/>
            </section>
        </>
    );
};

export default Onboard;
