import React from 'react';

const InforCard = ({information}) => {
    return (
        <>
            <div className="info-block">
                <h2 className="title-count">{information?.count}</h2>
                <p className="text">{information?.title}</p>
            </div>
        </>
    );
};

export default InforCard;
