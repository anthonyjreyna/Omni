import React from 'react';
import Title from "../../custom-component/Title";
import { InlineWidget } from "react-calendly";
import Head from "next/head";

const Schedule = () => {
    return (
        <>

            <section className="schedule-section" id="schedule">
                <div className="cs-container">
                    <div className="top-text d-flex flex-column justify-content-center align-items-center">
                        <Title text="Schedule Free 15 Minute Growth Session"/>
                        <p className="text text-center mb-0">No-BS, only results. Schedule your FREE no strings attached
                            IS minute session ($250 value). This IS only for people looking to IOX their sales.
                        </p>

                    </div>
                    {/*<div className="calendly-inline-widget"*/}
                    {/*     data-url="https://calendly.com/omnioutreach/30min?primary_color=348bc4"*/}
                    {/*     style={{minWidth:"320px",height:"630px"}} data-auto-load="false">*/}

                    {/*</div>*/}
                    <div className="inline-widget">
                    <InlineWidget  style={{height:"690px"}} url="https://calendly.com/omnioutreach/30min?primary_color=348bc4"

                    />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Schedule;
