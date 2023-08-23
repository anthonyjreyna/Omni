import React from 'react';
import faqData from "./faqData";
const QusAndAns = () => {
    return (
        <>
            {faqData.length >0 &&
            faqData?.map((item)=>{
                return(
                    <div className="faq-block mx-auto" key={item?.id}>
                        <div className="faq-btn without-focus border-0" type="button" data-bs-toggle="collapse"
                             data-bs-target={`#${item?.id}`} aria-expanded="false" aria-controls={item?.id}>
            <span className="lbl">{item?.question}</span>
                            <span className=" icon icon-plus">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <g transform="translate(-1608 -793)">
                  <rect width="30" height="4.424" rx="2.212" transform="translate(1608 806.154)" fill="#0e77bb"/>
                  <rect width="30" height="4.424" rx="2.212" transform="translate(1625.577 793) rotate(90)"
                        fill="#0e77bb"/>
                </g>
              </svg>
            </span>
                            <span className="icon icon-minus">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="5" viewBox="0 0 30 5">
                <rect width="30" height="5" rx="2.5" fill="#0e77bb"/>
              </svg>
            </span>
                        </div>
                        <div className="collapse" id={item?.id}>
                            <div className="faq-content">
                                <p className="faq-text mb-3">{item?.answer?.ans}
                                </p>
                                {item?.answer?.p2?.length > 0 &&  <p className="faq-text mb-2">{ item?.answer?.p2[0]}</p>}
                                {item?.answer?.list.length >0&&
                                    <ul className="faq-list">
                                        {item?.answer?.list?.map((data,index)=>(<li key={index}>{ data}</li>))}
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                )
            })

            }
        </>
    );
};

export default QusAndAns;
