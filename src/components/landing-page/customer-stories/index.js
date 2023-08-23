import React from "react";
import Author1 from "../../../../public/images/Customer1.png";
import Author2 from "../../../../public/images/Customer2.png";
import Author3 from "../../../../public/images/Customer3.png";
import Author4 from "../../../../public/images/Customer4.png";
import video3 from "../../../../public/video/3.mp4";
import video4 from "../../../../public/video/4.mp4";
import video2 from "../../../../public/video/2.mp4";
import video1 from "../../../../public/video/1.mp4";
import Reviews from "./Reviews";

const CustomerReviews = () => {
  const ReviewData = [
    {
      id: "1",
      name: "Andrew D.",
      title: "Financial Advisor",
      picture: Author1,
      content: video1,
    },
    {
      id: "2",
      name: "Mark S.",
      title: "Junk Removal",
      picture: Author2,
      content: video3,
    },
    {
      id: "3",
      name: "Tim F.",
      title: "Financial Advisor",
      picture: Author3,
      content: video4,
    },
    {
      id: "4",
      name: "Jerry P.",
      title: "Accountant",
      picture: Author4,
      content: video2,
    },
  ];

  return (
    <section className="customer-review-section" id="our-reviews">
      <div className="cs-container">
        <h2 className="title">Customer Stories</h2>
        <p className="sub-title mb-0">
          Don't take it from us. Here's what our clients have to say.
        </p>
        <div className="review-container">
          {ReviewData.map((reviews) => (
            <div className="review-block" key={reviews.id}>
              <Reviews review={reviews} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
