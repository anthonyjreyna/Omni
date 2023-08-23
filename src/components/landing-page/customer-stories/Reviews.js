import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CustomImageContainer from "../../custom-component/CustomImage";

const Reviews = (props) => {
  const { name, title, picture, content } = props.review;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const autoPlayVideo = () => {
    const video = document.querySelector(".modal video");
    video.play();
  };

  return (
    <>
      <CustomImageContainer
        handleShow={handleShow}
        src={picture.src}
        alt="image"
      />

      <div className="text-container">
        <div className="author-info">
          <p className="author">{name}</p>
          <p className="author-title mb-0">{title}</p>
        </div>
        <button onClick={handleShow} className="btn p-0 border-0 without-focus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="44"
            viewBox="0 0 45 44"
          >
            <g transform="translate(-599 -5291)">
              <path
                d="M22.5,0A22.254,22.254,0,0,1,45,22,22.254,22.254,0,0,1,22.5,44,22.254,22.254,0,0,1,0,22,22.254,22.254,0,0,1,22.5,0Z"
                transform="translate(599 5291)"
                fill="#0e77bb"
              />
              <path
                d="M9.152,1.357a1,1,0,0,1,1.7,0l8.2,13.113A1,1,0,0,1,18.2,16H1.8a1,1,0,0,1-.848-1.53Z"
                transform="translate(630 5303) rotate(90)"
                fill="#fff"
              />
            </g>
          </svg>
        </button>
      </div>
      <Modal
        show={show}
        onShow={autoPlayVideo}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <video width="100%" height="100%" controls playsInline crossOrigin>
            <source src={content} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Reviews;
