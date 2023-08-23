import React from 'react';

const LandingButton = ({name,pathname}) => {
    return (
        <>
            <div className="btn-container">
                <a className="btn btn-pulse" href={pathname}>{name}
                    <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20.296" height="17.499" viewBox="0 0 20.296 17.499">
                    <g transform="matrix(1, -0.017, 0.017, 1, 0, 0.349)">
                      <g transform="translate(0 0)">
                        <path
                            d="M1.2,39.014A1.429,1.429,0,0,1,1.449,39h14.11l-.308-.143a2.862,2.862,0,0,1-.809-.572l-3.957-3.957a1.481,1.481,0,0,1-.207-1.9,1.431,1.431,0,0,1,2.146-.186L19.58,39.4a1.431,1.431,0,0,1,0,2.024h0l-7.155,7.155a1.431,1.431,0,0,1-2.146-.143,1.481,1.481,0,0,1,.207-1.9l3.95-3.964a2.862,2.862,0,0,1,.715-.522l.429-.193H1.528a1.481,1.481,0,0,1-1.51-1.2A1.431,1.431,0,0,1,1.2,39.014Z"
                            transform="translate(0 -31.842)" fill="#fff"/>
                      </g>
                    </g>
                  </svg>
                </span></a>
            </div>
        </>
    );
};

export default LandingButton;
