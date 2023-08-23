import React, {useState} from 'react';
import Title from "../../custom-component/Title";
import SubTitle from "../../custom-component/SubTitle";
import review_image from "../../../../public/images/trustpilot.png"
import ReviewCard from "./ReviewCard";
import author_image from "../../../../public/images/author.png"

const reviewData=[{
    author_ame:"Cheryl Thomas",
    image:author_image.src,
    review:'2',
    review_title:"With Systems Have Helped Us Tremendous",
    review_description:"Lorem Ipsum is simply dummy text of the and ranting and typesetting Industry Lorem Ipsum has been Lorem Ipsum is simply dumm text of the and.and typesetting Industary."
},
    {
        author_ame:"Cheryl Thomas",
        image:author_image.src,
        review:'2',
        review_title:"With Systems Have Helped Us Tremendous",
        review_description:"Lorem Ipsum is simply dummy text of the and ranting and typesetting Industry Lorem Ipsum has been Lorem Ipsum is simply dumm text of the and.and typesetting Industary."
    },{
        author_ame:"Cheryl Thomas",
        image:author_image.src,
        review:'2',
        review_title:"With Systems Have Helped Us Tremendous",
        review_description:"Lorem Ipsum is simply dummy text of the and ranting and typesetting Industry Lorem Ipsum has been Lorem Ipsum is simply dumm text of the and.and typesetting Industary."
    },{
        author_ame:"Cheryl Thomas",
        image:author_image.src,
        review:'2',
        review_title:"With Systems Have Helped Us Tremendous",
        review_description:"Lorem Ipsum is simply dummy text of the and ranting and typesetting Industry Lorem Ipsum has been Lorem Ipsum is simply dumm text of the and.and typesetting Industary."
    },{
        author_ame:"Cheryl Thomas",
        image:author_image.src,
        review:'2',
        review_title:"With Systems Have Helped Us Tremendous",
        review_description:"Lorem Ipsum is simply dummy text of the and ranting and typesetting Industry Lorem Ipsum has been Lorem Ipsum is simply dumm text of the and.and typesetting Industary."
    },{
        author_ame:"Cheryl Thomas",
        image:author_image.src,
        review:'2',
        review_title:"With Systems Have Helped Us Tremendous",
        review_description:"Lorem Ipsum is simply dummy text of the and ranting and typesetting Industry Lorem Ipsum has been Lorem Ipsum is simply dumm text of the and.and typesetting Industary."
    },
    ]

const CustomerReview = () => {
    const [reviews,setReviews]=useState(reviewData)
    return (
            <section className="customer-review-section" id="our-reviews">
                <div className="cs-container">
                    <Title text="Join Hundreds Of Happy Customer"/>
                    <div className="img-container">
                        <img src={review_image.src} alt="Trustpilot"/>
                    </div>
                    <p className="sub-title mb-0">TrustScore 4.8 | 94 reviews</p>
                    <div className="review-container">
                        {reviews?.length > 0 &&
                            reviews?.map((review,index)=>{
                            return( <ReviewCard key={index} review={review}/>)
                        })
                        }
                    </div>
                </div>
            </section>

    );
};

export default CustomerReview;
