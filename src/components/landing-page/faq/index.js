import React from 'react';
import TopSection from "./TopSection";
import QusAndAns from "./QusAndAns";

const FaQ = () => {
    return (
        <>
            <section className="faq-section">
                <div className="cs-container">
                 <TopSection/>
                   <QusAndAns/>
                </div>
            </section>
        </>
    );
};

export default FaQ;
