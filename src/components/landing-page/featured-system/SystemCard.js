import React from 'react';

const SystemCard = ({system}) => {
    console.log("item",system   )
    return (
        <>
            <div className="system-block">
                <div className="img-container">
                    <img src={system?.image} alt="card"/>
                </div>
                <p className="text-title">{system?.title}</p>
                <p className="text">{system?.subTitle}</p>
            </div>
        </>
    );
};

export default SystemCard;
