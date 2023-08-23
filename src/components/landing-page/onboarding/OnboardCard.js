import React from 'react';

    const OnboardCard = ({information}) => {
    return (
        <>
            <div className="process-block">
                <div className="count-container">{information?.count}</div>
                <div className="process-text">
                    <p className="text-title">{information?.title}</p>
                    <p className="text mb-0">{information?.info}</p>
                </div>
            </div>
        </>
    );
};

export default OnboardCard;
