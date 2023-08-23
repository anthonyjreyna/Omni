import React from 'react';
import Title from "../../custom-component/Title";

const TextSection = ({title,description}) => {
    return (
        <>
            <div className="text-content">
               <Title text={title}/>
                <p className="info-text mb-0">{description}</p>
            </div>
        </>
    );
};

export default TextSection;
