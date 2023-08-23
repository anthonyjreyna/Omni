import React from 'react';
import Title from "../../custom-component/Title";

const TopSection = () => {
    return (
        <div className="top-content d-flex flex-column justify-content-center align-items-center">
            <Title text="Frequently Asked Linkedin Lead Generation Questions"/>
            <p className="text text-center mb-0">Here are some quick answers to our frequently asked questions. Book a
                call
                with team for a free consultation-</p>
        </div>
    );
};

export default TopSection;
