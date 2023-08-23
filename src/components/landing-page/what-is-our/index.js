import React from "react";

const WhatIsOurProcess = () => {
  return (
    <section className="omniout-process-section" id="our-process">
      <div className="cs-container">
        <h2 className="title">What Is Our Process?</h2>
        <p className="text mb-0 text-center">
          We’ve developed a breakthrough strategy for the ultimate success of
          B2B companies, which is called <b>S.C.A.L.E. Framework™.</b>
        </p>
        <div className="process-container">
          <div className="process-nav">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-strategy-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-strategy"
                  type="button"
                  role="tab"
                  aria-controls="pills-strategy"
                  aria-selected="true"
                >
                  1. Strategy
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-copywriting-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-copywriting"
                  type="button"
                  role="tab"
                  aria-controls="pills-copywriting"
                  aria-selected="false"
                >
                  2. Copywriting
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-audience-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-audience"
                  type="button"
                  role="tab"
                  aria-controls="pills-audience"
                  aria-selected="false"
                >
                  3. Audience
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link lead-link"
                  id="pills-lead-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-lead"
                  type="button"
                  role="tab"
                  aria-controls="pills-lead"
                  aria-selected="false"
                >
                  4. Lead Sourcing
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-execution-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-execution"
                  type="button"
                  role="tab"
                  aria-controls="pills-execution"
                  aria-selected="false"
                >
                  5. Execution
                </button>
              </li>
            </ul>
          </div>
          <div className="process-block">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-strategy"
                role="tabpanel"
                aria-labelledby="pills-strategy-tab"
                tabindex="0"
              >
                <div className="text-title">1. Strategy</div>
                <div className="text-content">
                  Having a clear and effective strategy is the foundation of
                  success. Our S.C.A.L.E. Framework™ provides you with a
                  comprehensive and proven method for acquiring high-quality
                  clients. With a clear roadmap, you can eliminate the guesswork
                  and focus on what matters: delivering value to your clients
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-copywriting"
                role="tabpanel"
                aria-labelledby="pills-copywriting-tab"
                tabindex="0"
              >
                <div className="text-title">2. Copywriting</div>
                <div className="text-content">
                  We all know that copywriting is the art of writing persuasive
                  and compelling messages that can engage your audience and
                  drive results. ​​It's the key to creating an impact with your
                  message. Our copywriting Experts craft compelling,
                  personalized messages that resonate with your target audience
                  and drive conversions.
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-audience"
                role="tabpanel"
                aria-labelledby="pills-audience-tab"
                tabindex="0"
              >
                <div className="text-title">3. Audience</div>
                <div className="text-content">
                  To succeed, you need to understand your audience. This is the
                  starting point of everything we do. Without proper audience
                  analysis, it's likely your message won't resonate. By using
                  our audience insights and analysis, you will be able to
                  identify the key characteristics of your target audience and
                  tailor your message to their needs."
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-lead"
                role="tabpanel"
                aria-labelledby="pills-lead-tab"
                tabindex="0"
              >
                <div className="text-title">4. Lead Sourcing</div>
                <div className="text-content">
                  Using our custom scraping methods we scraped the web for leads
                  that match your ICP. Next, we enrich these leads with several
                  data points including; Email addresses, Linkedin profiles,
                  Phone numbers, etc. We then run the data through our
                  proprietary system to validate the data.
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-execution"
                role="tabpanel"
                aria-labelledby="pills-execution-tab"
                tabindex="0"
              >
                <div className="text-title">5. Execution</div>
                <div className="text-content">
                  The S.C.A.L.E. Framework is not just about having a good plan
                  – it's about taking action and making it happen. We build your
                  own internal client acquisition system that generates
                  appointments without lifting a finger. We oversee the entire
                  process of your campaign from start to finish.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatIsOurProcess;
