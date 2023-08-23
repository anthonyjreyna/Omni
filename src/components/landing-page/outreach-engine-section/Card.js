import React from 'react';

const Card = ({item}) => {
    return (
        <>
            <div className="content-details">
                <div className="details-block">
                    <div className="icon-container d-flex justify-content-center align-items-center">
                        {item?.icon}
                    </div>
                </div>
                <div className="text-block">
                    <p className="text-title">{item?.name}</p>
                    <p className="text">Time Saved: {item.time}</p>
                </div>
            </div>
        </>
    );
};

export default Card;
