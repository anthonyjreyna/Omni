import React from 'react';
import InforCard from "./InfroCard";

const informationData=[{
    count:"77.8K",
    title:"Leads generated for clients"
},{
    count:"24.8K",
    title:"Meetings booked for clients"
},{
    count:"$32.5M",
    title:"Revenue created for clients"
}]


const InformationSection = () => {
    return (
        <>
            <section className="omnioutreach-info-section">
                <div className="cs-container">
                    <div className="info-container">
                        {informationData.length > 0 &&
                            informationData.map((item,index)=>{
                            return(
                                <InforCard key={index} information={item}/>
                            )
                        })
                        }


                    </div>
                </div>
            </section>
        </>
    );
};

export default InformationSection;
