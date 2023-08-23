import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <>
            <div className="review-block">
                <div className="author-info">
                    <div className="author-img">
                        <img src={review?.image} alt="Author"/>
                    </div>
                    <div className="author-detail">
                        <p className="author-name mb-0">Cheryl Thomas</p>
                        <p className="texts mb-0">{review?.review} Review</p>
                    </div>
                </div>
                <div className="total-reviews">
                    <div className="d-flex align-items-center">
                        <div className="stars-container">
                  <span className="star-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                      <g transform="translate(0.374)">
                        <rect width="14" height="14" transform="translate(-0.374)" fill="#00b67a"/>
                        <path
                            d="M19.3,23.273l2.129-.54.89,2.742Zm4.9-3.544H20.452L19.3,16.2l-1.152,3.529H14.4l3.033,2.188-1.152,3.529,3.033-2.188,1.867-1.342L24.2,19.729Z"
                            transform="translate(-12.008 -13.837)" fill="#fff"/>
                      </g>
                    </svg>
                  </span>
                            <span className="star-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                      <g transform="translate(0.374)">
                        <rect width="14" height="14" transform="translate(-0.374)" fill="#00b67a"/>
                        <path
                            d="M19.3,23.273l2.129-.54.89,2.742Zm4.9-3.544H20.452L19.3,16.2l-1.152,3.529H14.4l3.033,2.188-1.152,3.529,3.033-2.188,1.867-1.342L24.2,19.729Z"
                            transform="translate(-12.008 -13.837)" fill="#fff"/>
                      </g>
                    </svg>
                  </span>
                            <span className="star-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                      <g transform="translate(0.374)">
                        <rect width="14" height="14" transform="translate(-0.374)" fill="#00b67a"/>
                        <path
                            d="M19.3,23.273l2.129-.54.89,2.742Zm4.9-3.544H20.452L19.3,16.2l-1.152,3.529H14.4l3.033,2.188-1.152,3.529,3.033-2.188,1.867-1.342L24.2,19.729Z"
                            transform="translate(-12.008 -13.837)" fill="#fff"/>
                      </g>
                    </svg>
                  </span>
                            <span className="star-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                      <g transform="translate(0.374)">
                        <rect width="14" height="14" transform="translate(-0.374)" fill="#00b67a"/>
                        <path
                            d="M19.3,23.273l2.129-.54.89,2.742Zm4.9-3.544H20.452L19.3,16.2l-1.152,3.529H14.4l3.033,2.188-1.152,3.529,3.033-2.188,1.867-1.342L24.2,19.729Z"
                            transform="translate(-12.008 -13.837)" fill="#fff"/>
                      </g>
                    </svg>
                  </span>
                            <span className="star-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                      <g transform="translate(0.374)">
                        <rect width="14" height="14" transform="translate(-0.374)" fill="#00b67a"/>
                        <path
                            d="M19.3,23.273l2.129-.54.89,2.742Zm4.9-3.544H20.452L19.3,16.2l-1.152,3.529H14.4l3.033,2.188-1.152,3.529,3.033-2.188,1.867-1.342L24.2,19.729Z"
                            transform="translate(-12.008 -13.837)" fill="#fff"/>
                      </g>
                    </svg>
                  </span>
                        </div>
                        <p className="text mb-0"><span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.946" height="12.156" viewBox="0 0 9.946 12.156">
                      <path
                          d="M7.973,1,3,3.21V6.525a6.876,6.876,0,0,0,4.973,6.631,6.876,6.876,0,0,0,4.973-6.631V3.21ZM6.868,9.841l-2.21-2.21.779-.779L6.868,8.277l3.641-3.641.779.785Z"
                          transform="translate(-3 -1)" fill="#062231"/>
                    </svg>{" "}
                  </span>Verified
                        </p>
                    </div>
                    <div className="review-date">Jan 11, 2023</div>
                </div>
                <div className="review-text">
                    <p className="review-title">{review?.review_title}</p>
                    <p className="text-detail mb-0">{review?.review_description}</p>
                </div>
            </div>


            </>
    );
};

export default ReviewCard;
