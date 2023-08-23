import React from 'react';
import Title from "../../custom-component/Title";
import SubTitle from "../../custom-component/SubTitle";
import LandingButton from "../../button/LandingBottun";
// import done_for_you from "../../../../public/images/done-for-you.png";
// import guaranteed_results from "../../../../public/images/guarantee.png";
import Card from "./Card";

const engineData=[{
    id:1,
    icon:  <svg xmlns="http://www.w3.org/2000/svg" width="30.238" height="21.261" viewBox="0 0 30.238 21.261">
        <path
            d="M27.58,76H2.658A2.662,2.662,0,0,0,0,78.658V94.6a2.662,2.662,0,0,0,2.658,2.658H27.58A2.661,2.661,0,0,0,30.238,94.6V78.658A2.66,2.66,0,0,0,27.58,76Zm-.372,1.772L17,87.928a2.658,2.658,0,0,1-3.76,0L3.03,77.772ZM1.772,94.243V79.019l7.656,7.616Zm1.259,1.246,7.653-7.6,1.3,1.3a4.429,4.429,0,0,0,6.262,0l1.3-1.3,7.653,7.6Zm25.435-1.246L20.81,86.635l7.656-7.616Z"
            transform="translate(0 -76)" fill="#062231" />
    </svg>,
    name:"Email Warming Setup",
    time:"10 Minutes"
},{
    id:2,
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="30.427" height="16.846" viewBox="0 0 30.427 16.846">
        <g transform="translate(0 -114.266)">
            <circle cx="0.594" cy="0.594" r="0.594" transform="translate(14.619 114.267)" fill="#062231" />
            <g transform="translate(5.018 117.297)">
                <circle cx="0.682" cy="0.682" r="0.682" transform="translate(20.534 3.243)" fill="#062231" />
                <path
                    d="M89.094,165.69l-.589,1.68-.58-1.7a.6.6,0,0,0-1.124-.008l-.616,1.728L85.6,165.7a.6.6,0,0,0-1.126.387l1.134,3.3a.6.6,0,0,0,.56.4h0a.6.6,0,0,0,.561-.4l.614-1.722.585,1.714a.6.6,0,0,0,.561.4h0a.6.6,0,0,0,.562-.4l1.159-3.305a.6.6,0,1,0-1.124-.394Z"
                    transform="translate(-84.446 -165.267)" fill="#062231" />
                <path
                    d="M200.79,165.327a.6.6,0,0,0-.37.757l1.134,3.3a.6.6,0,0,0,.56.4h0a.6.6,0,0,0,.561-.4l.614-1.722.585,1.714a.6.6,0,0,0,.561.4h0a.6.6,0,0,0,.562-.4l1.159-3.305a.6.6,0,0,0-1.124-.394l-.589,1.68-.58-1.7a.6.6,0,0,0-1.124-.008l-.616,1.728-.582-1.692A.6.6,0,0,0,200.79,165.327Z"
                    transform="translate(-193.498 -165.267)" fill="#062231" />
                <path
                    d="M318.087,169.789h0a.6.6,0,0,0,.561-.4l.614-1.722.585,1.714a.6.6,0,0,0,.561.4h0a.6.6,0,0,0,.562-.4l1.159-3.305a.6.6,0,0,0-1.124-.394l-.589,1.68-.58-1.7a.6.6,0,0,0-1.124-.008l-.616,1.728-.582-1.692a.6.6,0,1,0-1.126.387l1.134,3.3A.6.6,0,0,0,318.087,169.789Z"
                    transform="translate(-302.579 -165.269)" fill="#062231" />
            </g>
            <path
                d="M25.092,114.266H17.883a.6.6,0,0,0,0,1.191h7.209a4.144,4.144,0,0,1,0,8.289H17.144l-1.394-.86a.6.6,0,0,0-.906.558l.026.3H5.335a4.144,4.144,0,0,1,0-8.289h7.209a.6.6,0,0,0,0-1.191H5.335a5.335,5.335,0,0,0,0,10.67h9.637l.343,4a.6.6,0,0,0,.906.456l.592-.364,1.105,1.8a.6.6,0,0,0,.819.195l2.028-1.249a.6.6,0,0,0,.195-.819l-1.105-1.8.592-.364a.6.6,0,0,0,0-1.014l-1.371-.845h6.017a5.335,5.335,0,1,0,0-10.67ZM18.619,129.7l-1.105-1.8a.6.6,0,0,0-.819-.195l-.276.17-.288-3.356L19,126.288l-.276.17a.6.6,0,0,0-.195.819l1.105,1.8Z"
                fill="#062231" />
        </g>
    </svg>,
    name:"Purchasing Multiple Domains",
    time:"20 Minutes"
},{
    id:3,
    icon:  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <path
            d="M15,0A15,15,0,1,0,30,15,15,15,0,0,0,15,0Zm0,28.75A13.75,13.75,0,1,1,28.75,15,13.75,13.75,0,0,1,15,28.75Z"
            fill="#062231" />
        <path
            d="M16.5,4A12.5,12.5,0,1,0,29,16.5,12.5,12.5,0,0,0,16.5,4Zm0,23.75A11.25,11.25,0,1,1,27.75,16.5,11.25,11.25,0,0,1,16.5,27.75Z"
            transform="translate(-1.5 -1.5)" fill="#062231" />
        <path
            d="M19.125,11a8.124,8.124,0,1,0,5.744,13.869.625.625,0,0,0-.881-.881A6.875,6.875,0,1,1,26,19.125v.938a1.563,1.563,0,0,1-3.125,0V16a.626.626,0,1,0-1.25.069,4.375,4.375,0,1,0,.469,5.556,2.813,2.813,0,0,0,5.156-1.562v-.937A8.125,8.125,0,0,0,19.125,11ZM18.5,22.25a3.125,3.125,0,1,1,3.125-3.125A3.125,3.125,0,0,1,18.5,22.25Z"
            transform="translate(-4.125 -4.125)" fill="#062231" />
    </svg>,
    name:"Setup Email Domains",
    time:"10 Minutes"
},{
    id:4,
    icon:  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
        <g transform="translate(0 -0.001)">
            <path
                d="M25.63,4.418A14.9,14.9,0,0,0,15.076,0h0c-.051,0-.106,0-.15,0A15.008,15.008,0,0,0,1.118,20.694a.44.44,0,0,0,.813-.334,14.005,14.005,0,0,1-.7-2.192,13.086,13.086,0,0,0,6.57,3.782,13.289,13.289,0,0,0,3.907,6.785,14.057,14.057,0,0,1-3.869-1.558A14.207,14.207,0,0,1,2.8,22.122a.44.44,0,0,0-.759.444A14.992,14.992,0,0,0,14.924,30h.152A15,15,0,0,0,25.63,4.418ZM22.644,9.984q-.09-.476-.2-.937a13.775,13.775,0,0,1,4.693,2.4,5.037,5.037,0,0,1,1.952,3.119H23.831V11.4a1.439,1.439,0,0,0-1.186-1.414Zm-7.2-2a25.876,25.876,0,0,1,6.035.789c.1.388.19.786.271,1.193H15.44Zm0-.879V.907a5.27,5.27,0,0,1,3.313,2.059A14.025,14.025,0,0,1,21.2,7.794,27.13,27.13,0,0,0,15.44,7.1ZM14.56.908V7.1a28.293,28.293,0,0,0-3.144.221.44.44,0,0,0,.111.872A27.4,27.4,0,0,1,14.56,7.98V9.961H8.255c.081-.407.172-.805.271-1.193.336-.088.682-.169,1.03-.243a.44.44,0,1,0-.182-.86q-.289.061-.575.129a14.024,14.024,0,0,1,2.449-4.828A5.272,5.272,0,0,1,14.56.908Zm-7.2,9.076A1.439,1.439,0,0,0,6.169,11.4v3.164H.908A5.034,5.034,0,0,1,2.86,11.442a13.764,13.764,0,0,1,4.693-2.4q-.107.461-.2.937ZM7.049,11.4a.558.558,0,0,1,.558-.557H22.394a.558.558,0,0,1,.558.557V18.6a.558.558,0,0,1-.558.557H7.606a.558.558,0,0,1-.558-.557Zm1.477,9.836c-.1-.388-.19-.786-.271-1.193H14.56v1.981a25.874,25.874,0,0,1-6.035-.789Zm6.914-1.193h6.306c-.081.407-.172.8-.271,1.193a25.876,25.876,0,0,1-6.035.789Zm7.2-.022A1.439,1.439,0,0,0,23.831,18.6V15.441h5.261A5.036,5.036,0,0,1,27.14,18.56a13.763,13.763,0,0,1-4.693,2.4q.107-.461.2-.937Zm6.122-8.182a13.082,13.082,0,0,0-6.572-3.784,13.279,13.279,0,0,0-3.912-6.79A14.15,14.15,0,0,1,28.766,11.837ZM4.993,5.038a14.029,14.029,0,0,1,6.726-3.776,13.271,13.271,0,0,0-3.914,6.79,13.081,13.081,0,0,0-6.571,3.784,14.029,14.029,0,0,1,3.759-6.8ZM.908,15.441H6.169V18.6a1.438,1.438,0,0,0,1.186,1.414q.09.476.2.937a13.771,13.771,0,0,1-4.693-2.4A5.034,5.034,0,0,1,.908,15.441ZM8.8,22.208a27.112,27.112,0,0,0,5.762.694v6.194a5.27,5.27,0,0,1-3.313-2.059A14.021,14.021,0,0,1,8.8,22.208Zm16.209,2.756a14.031,14.031,0,0,1-6.73,3.777,9.572,9.572,0,0,0,2.11-2.493.44.44,0,1,0-.751-.457c-1.192,1.957-2.668,3.115-4.2,3.3V22.9a27.1,27.1,0,0,0,5.762-.694c-.161.523-.339,1.028-.534,1.507a.44.44,0,1,0,.815.331,19.843,19.843,0,0,0,.711-2.1,13.083,13.083,0,0,0,6.572-3.784,14.031,14.031,0,0,1-3.759,6.8Zm0,0"
                transform="translate(0)" fill="#062231" />
            <path
                d="M144.687,209.32a.582.582,0,0,0,.357.105h1.467a2.137,2.137,0,0,0,1.436-.463,1.837,1.837,0,0,0,.541-1.464v-2.262a1.837,1.837,0,0,0-.541-1.464,2.137,2.137,0,0,0-1.436-.463h-1.467a.583.583,0,0,0-.357.105.316.316,0,0,0-.144.256v5.395A.316.316,0,0,0,144.687,209.32Zm2.665-1.822c0,.621-.275.923-.84.923h-.832v-4.109h.832c.566,0,.84.3.84.923Zm0,0"
                transform="translate(-136.088 -191.429)" fill="#062231" />
            <path
                d="M225.813,209.334a.779.779,0,0,0,.4.1.787.787,0,0,0,.392-.095.306.306,0,0,0,.177-.275v-3.213l1.726,3.227a.677.677,0,0,0,.648.355.786.786,0,0,0,.391-.095.305.305,0,0,0,.177-.275v-5.386a.3.3,0,0,0-.173-.275.947.947,0,0,0-.79,0,.3.3,0,0,0-.173.275v3.209l-1.543-2.983a1.358,1.358,0,0,0-.357-.475.837.837,0,0,0-.473-.113.809.809,0,0,0-.4.091.3.3,0,0,0-.173.279v5.378a.307.307,0,0,0,.172.274Zm0,0"
                transform="translate(-212.443 -191.433)" fill="#062231" />
            <path
                d="M307.767,207.664a1.118,1.118,0,0,1-.646.177,1.307,1.307,0,0,1-.519-.1,1.188,1.188,0,0,1-.36-.222,2.916,2.916,0,0,0-.268-.231.454.454,0,0,0-.263-.109.439.439,0,0,0-.351.207.675.675,0,0,0-.151.4c0,.264.195.51.578.73a2.713,2.713,0,0,0,1.365.327,2.168,2.168,0,0,0,1.449-.469,1.662,1.662,0,0,0,.553-1.334,1.9,1.9,0,0,0-.2-.9,1.581,1.581,0,0,0-.5-.587,5.545,5.545,0,0,0-.641-.371c-.23-.113-.446-.209-.641-.283a1.537,1.537,0,0,1-.484-.284.513.513,0,0,1-.189-.4.508.508,0,0,1,.232-.444,1.18,1.18,0,0,1,.675-.165,1.678,1.678,0,0,1,.725.155,1.311,1.311,0,0,0,.419.16.382.382,0,0,0,.34-.212.784.784,0,0,0,.12-.4.465.465,0,0,0-.18-.363,1.1,1.1,0,0,0-.451-.219,4.3,4.3,0,0,0-.513-.1,3.767,3.767,0,0,0-.459-.03,2.9,2.9,0,0,0-.728.089,2.275,2.275,0,0,0-.647.281,1.391,1.391,0,0,0-.487.541,1.709,1.709,0,0,0-.181.8,1.692,1.692,0,0,0,.148.721,1.378,1.378,0,0,0,.39.508,3.343,3.343,0,0,0,.527.338c.191.1.383.191.57.27s.36.163.515.247a1.132,1.132,0,0,1,.371.315.7.7,0,0,1,.139.426A.578.578,0,0,1,307.767,207.664Zm0,0"
                transform="translate(-287.357 -190.775)" fill="#062231" />
        </g>
    </svg>,
    name:"DNS Setup",
    time:"10 Minutes"
},
    {
        id:5,
        icon:  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <g transform="translate(0 0)">
                <g transform="translate(0.001 12.755)">
                    <path
                        d="M16.987,222.538a.881.881,0,0,0-1.245,0L13.7,224.583,11.809,222.7l-.869-.869,2.045-2.045a.881.881,0,0,0-1.245-1.245l-2.045,2.045-.711-.711h0l-.666-.666a.881.881,0,0,0-1.245,1.245l.044.044L4.4,223.2a5.606,5.606,0,0,0-.573,7.243L.258,234.019A.881.881,0,1,0,1.5,235.265l3.57-3.57A5.555,5.555,0,0,0,8.36,232.76h0a5.561,5.561,0,0,0,3.958-1.639l2.712-2.712.044.044a.881.881,0,0,0,1.245-1.245l-1.378-1.378,2.045-2.045A.881.881,0,0,0,16.987,222.538Zm-5.915,7.337a3.836,3.836,0,0,1-5.425-5.425l2.712-2.712,2.1,2.1,2.617,2.617h0l.711.711Z"
                        transform="translate(-0.001 -218.278)" fill="#062231" />
                </g>
                <g transform="translate(13.423 0)">
                    <path
                        d="M245.959.258a.881.881,0,0,0-1.245,0l-3.57,3.57A5.6,5.6,0,0,0,233.9,4.4l-2.712,2.712-.044-.044A.881.881,0,0,0,229.9,8.316l8,8a.881.881,0,1,0,1.245-1.245l-.044-.044,2.712-2.712a5.606,5.606,0,0,0,.573-7.244L245.959,1.5A.881.881,0,0,0,245.959.258Zm-5.39,10.814-2.712,2.712L232.433,8.36l2.712-2.712a3.836,3.836,0,0,1,5.425,5.425Z"
                        transform="translate(-229.64 0)" fill="#062231" />
                </g>
            </g>
        </svg>,
        name:"DMARC & DKIM Setup",
        time:"10 Minutes"
    },
    {
        id:44,
        icon:  <svg xmlns="http://www.w3.org/2000/svg" width="31.678" height="30.405" viewBox="0 0 31.678 30.405">
            <g transform="translate(0 -0.929)">
                <path
                    d="M29.7,10.215H23.64a7.92,7.92,0,1,0-15.6,0H1.98A1.98,1.98,0,0,0,0,12.2V29.354a1.98,1.98,0,0,0,1.98,1.98H29.7a1.98,1.98,0,0,0,1.98-1.98V12.2A1.98,1.98,0,0,0,29.7,10.215ZM1.32,12.387,10.5,19.9,1.32,29.084Zm10.21,8.388c1.452,1.188,2.376,2.171,4.31,2.171s2.864-.99,4.31-2.171l9.279,9.239H2.25Zm9.649-.845,9.18-7.543v16.7ZM15.839,2.3a6.6,6.6,0,1,1-6.6,6.6,6.6,6.6,0,0,1,6.6-6.6ZM23.3,11.535h6.019L17.931,20.854a3.3,3.3,0,0,1-4.184,0L2.363,11.535H8.382a7.92,7.92,0,0,0,14.915,0Z"
                    transform="translate(0)" fill="#062231" />
                <path
                    d="M22.007,8.9l.363-.178v5.53a.66.66,0,0,0,1.32,0c0-7,.125-6.89-.31-7.161s-.66-.033-1.98.66A.66.66,0,0,0,22.007,8.9Z"
                    transform="translate(-7.191 -2.059)" fill="#062231" />
            </g>
        </svg>,
        name:"Setup Master Inbox",
        time:"10 Minutes"
    },
    {
        id:6,
        icon:   <svg xmlns="http://www.w3.org/2000/svg" width="27.155" height="30.3" viewBox="0 0 27.155 30.3">
            <g transform="translate(-26.685 0.15)">
                <circle cx="0.814" cy="0.814" r="0.814" transform="translate(29.745 2.127)" fill="#062231"
                        stroke="#062231" stroke-width="0.3" />
                <circle cx="0.814" cy="0.814" r="0.814" transform="translate(32.249 2.127)" fill="#062231"
                        stroke="#062231" stroke-width="0.3" />
                <circle cx="0.814" cy="0.814" r="0.814" transform="translate(34.753 2.127)" fill="#062231"
                        stroke="#062231" stroke-width="0.3" />
                <path d="M180.357,130.42a.437.437,0,1,0,0-.875h-6.912a.437.437,0,0,0,0,.875Z"
                      transform="translate(-137.607 -121.954)" fill="#062231" stroke="#062231" stroke-width="0.3" />
                <path
                    d="M78.823,167.991a.437.437,0,0,0,.437.437H97.21a.437.437,0,0,0,0-.875H79.26a.437.437,0,0,0-.437.437Z"
                    transform="translate(-48.942 -157.736)" fill="#062231" stroke="#062231" stroke-width="0.3" />
                <path d="M79.261,205.117h4.076a.437.437,0,0,0,0-.875H79.261a.437.437,0,1,0,0,.875Z"
                      transform="translate(-48.943 -192.275)" fill="#062231" stroke="#062231" stroke-width="0.3" />
                <path
                    d="M52.959,25.686l-2.88-2.88a2.256,2.256,0,0,0,1.673-2.176V2.252A2.254,2.254,0,0,0,49.5,0H43.5a.437.437,0,1,0,0,.875H49.5a1.379,1.379,0,0,1,1.377,1.377V5.007H27.71V2.252A1.379,1.379,0,0,1,29.087.875H41.439a.437.437,0,1,0,0-.875H29.087a2.254,2.254,0,0,0-2.252,2.252v14.7a.437.437,0,1,0,.875,0V5.882H50.877V20.629A1.379,1.379,0,0,1,49.5,22.006h-.22s-7.158-7.2-7.38-7.354l-4.3-2.3a.448.448,0,0,0-.051-.023,1.163,1.163,0,0,0-1.5,1.487.439.439,0,0,0,.023.053l2.27,4.335c.05.1,3.773,3.8,3.773,3.8H29.087a1.379,1.379,0,0,1-1.377-1.377V19.077a.437.437,0,0,0-.875,0v1.552a2.254,2.254,0,0,0,2.252,2.252h13.9l3.7,3.7a.437.437,0,0,0,.619-.619L39.98,18.635l2.346-2.346L52.34,26.3a1.659,1.659,0,0,1-2.346,2.346l-1.282-1.282a.437.437,0,1,0-.619.619l1.282,1.282a2.533,2.533,0,0,0,3.583-3.583ZM41.634,15.6l-2.346,2.346-.2-.2-.612-1.169,1.8-1.8,1.159.62Zm-4.7-2.384c.079-.031.022-.1.283-.072l2.244,1.2-1.417,1.417L36.862,13.5a.28.28,0,0,1,.075-.282Z"
                    fill="#062231" stroke="#062231" stroke-width="0.3" />
            </g>
        </svg>,
        name:"A/B Copywriting",
        time:"10 Minutes"
    },
    {
        id:7,
        icon:   <svg xmlns="http://www.w3.org/2000/svg" width="30.007" height="30" viewBox="0 0 30.007 30">
            <g transform="translate(0 -0.059)">
                <path
                    d="M19,15.559h7.071a2,2,0,1,0,0-1H19v-5h2.5a1.5,1.5,0,0,0,1.5-1.5v-4.5a.5.5,0,0,1,.5-.5h2.571a2,2,0,1,0,0-1H23.5a1.5,1.5,0,0,0-1.5,1.5v4.5a.5.5,0,0,1-.5.5H19v-4.5c0-2.28-4.084-4-9.5-4S0,1.778,0,4.059v22c0,2.28,4.084,4,9.5,4s9.5-1.719,9.5-4v-2.5h2.5a.5.5,0,0,1,.5.5v3a1.5,1.5,0,0,0,1.5,1.5h2.571a2,2,0,1,0,0-1H23.5a.5.5,0,0,1-.5-.5v-3a1.5,1.5,0,0,0-1.5-1.5H19Zm9-1.5a1,1,0,1,1-1,1A1,1,0,0,1,28,14.059Zm0-12.5a1,1,0,1,1-1,1A1,1,0,0,1,28,1.559Zm0,25.5a1,1,0,1,1-1,1A1,1,0,0,1,28,27.059Zm-18.5-26c5.009,0,8.5,1.581,8.5,3s-3.49,3-8.5,3S1,5.478,1,4.059,4.49,1.059,9.5,1.059ZM1,5.9C2.529,7.2,5.679,8.059,9.5,8.059S16.471,7.2,18,5.9v5.663c0,1.419-3.49,3-8.5,3s-8.5-1.581-8.5-3ZM9.5,29.059c-5.009,0-8.5-1.581-8.5-3V20.4c1.529,1.3,4.679,2.163,8.5,2.163S16.471,21.7,18,20.4v5.663C18,27.478,14.509,29.059,9.5,29.059Zm0-7.5c-5.009,0-8.5-1.581-8.5-3V13.4c1.529,1.3,4.679,2.163,8.5,2.163S16.471,14.7,18,13.4v5.163C18,19.978,14.509,21.559,9.5,21.559Zm0,0"
                    transform="translate(0 0)" fill="#062231" />
                <path d="M440,32.059h1.01v1.01H440Zm0,0" transform="translate(-412.525 -29.98)" fill="#062231" />
                <path d="M440,232.059h1.01v1.01H440Zm0,0" transform="translate(-412.525 -217.505)"
                      fill="#062231" />
                <path d="M440,440.059h1.01v1.01H440Zm0,0" transform="translate(-412.525 -412.524)"
                      fill="#062231" />
            </g>
        </svg>,
        name:"Format Raw Lead Data",
        time:"10 Minutes"
    },
    {
        id:8,
        icon:   <svg xmlns="http://www.w3.org/2000/svg" width="35.56" height="30.998" viewBox="0 0 35.56 30.998">
            <g transform="translate(-0.9 -4.9)">
                <path
                    d="M60.754,30.8a.539.539,0,0,0-.57.57v7.015a.509.509,0,0,1-.513.513.57.57,0,1,0,0,1.141,1.655,1.655,0,0,0,1.654-1.654V31.37A.539.539,0,0,0,60.754,30.8Z"
                    transform="translate(-24.964 -11.086)" fill="#062231" stroke="#062231" stroke-width="0.2" />
                <path
                    d="M61.57,25.8a.539.539,0,0,0-.57.57v.855a.57.57,0,1,0,1.141,0V26.37A.539.539,0,0,0,61.57,25.8Z"
                    transform="translate(-25.781 -8.937)" fill="#062231" stroke="#062231" stroke-width="0.2" />
                <path
                    d="M34.706,5H2.654A1.734,1.734,0,0,0,1,6.654V27.3a1.734,1.734,0,0,0,1.654,1.654H23.3a.57.57,0,1,0,0-1.141H2.654a.6.6,0,0,1-.513-.513V6.654a.6.6,0,0,1,.513-.513H34.706a.6.6,0,0,1,.513.513v8.612a.57.57,0,1,0,1.141,0V6.654A1.734,1.734,0,0,0,34.706,5Z"
                    fill="#062231" stroke="#062231" stroke-width="0.2" />
                <path
                    d="M22.088,20.9l-8.1-7.471a.566.566,0,0,0-.741.855l8.042,7.471A3.638,3.638,0,0,0,23.8,22.782a3.772,3.772,0,0,0,2.566-1.027L39.026,10.064a.566.566,0,1,0-.741-.855L25.624,20.9a2.626,2.626,0,0,1-3.536,0Z"
                    transform="translate(-5.176 -1.756)" fill="#062231" stroke="#062231" stroke-width="0.2" />
                <path
                    d="M8.5,11.529,5.989,9.191a.566.566,0,0,0-.741.855l2.509,2.338a.6.6,0,0,0,.8,0,.62.62,0,0,0-.057-.855Z"
                    transform="translate(-1.738 -1.738)" fill="#062231" stroke="#062231" stroke-width="0.2" />
                <path
                    d="M5,39.11a1.291,1.291,0,0,0,1.312,1.312h1.54a.57.57,0,0,0,0-1.141H6.141V37.57A.539.539,0,0,0,5.57,37a.539.539,0,0,0-.57.57Z"
                    transform="translate(-1.719 -13.75)" fill="#062231" stroke="#062231" stroke-width="0.2" />
                <path
                    d="M5.57,33.281a.539.539,0,0,0,.57-.57V31.57A.539.539,0,0,0,5.57,31a.539.539,0,0,0-.57.57v1.141A.539.539,0,0,0,5.57,33.281Z"
                    transform="translate(-1.719 -11.172)" fill="#062231" stroke="#062231" stroke-width="0.2" />
                <path d="M40.711,10.141a.57.57,0,1,0,0-1.141H39.57a.57.57,0,1,0,0,1.141Z"
                      transform="translate(-16.328 -1.719)" fill="#062231" stroke="#062231" stroke-width="0.2" />
                <path d="M48.992,10.141a.57.57,0,0,0,0-1.141H45.57a.57.57,0,0,0,0,1.141Z"
                      transform="translate(-18.906 -1.719)" fill="#062231" stroke="#062231" stroke-width="0.2" />
                <path
                    d="M50.058,38.113v-2a3.918,3.918,0,0,0-2.281-3.593V24.711a1.711,1.711,0,1,0-3.422,0v7.813a3.918,3.918,0,0,0-2.281,3.593v2a9.361,9.361,0,0,1-.114,1.312.566.566,0,0,0,.513.627.539.539,0,0,0,.627-.513,7.872,7.872,0,0,0,.114-1.711h5.7a10.471,10.471,0,0,0,.855,4.563h-2V39.539a.57.57,0,1,0-1.141,0v2.852H45.5V39.539a.57.57,0,1,0-1.141,0v2.852h-2c.057-.171.114-.285.171-.456a.577.577,0,0,0-1.084-.4,5.03,5.03,0,0,1-.513,1.141.569.569,0,0,0,.513.855h9.125a.6.6,0,0,0,.513-.855,11.133,11.133,0,0,1-1.027-4.563ZM45.5,24.711a.57.57,0,1,1,1.141,0v7.471a3.4,3.4,0,0,0-1.141,0Zm3.422,11.977h-5.7v-.57a2.852,2.852,0,0,1,5.7,0Z"
                    transform="translate(-17.121 -7.734)" fill="#062231" stroke="#062231" stroke-width="0.2" />
            </g>
        </svg>,
        name:"Email List Cleaning",
        time:"10 Minutes"
    },
    {
        id:9,
        icon:   <svg xmlns="http://www.w3.org/2000/svg" width="30.135" height="32.837" viewBox="0 0 30.135 32.837">
            <g transform="translate(-21.069 0)">
                <path
                    d="M250.331,17.513,240.787,1.347a2.739,2.739,0,0,0-4.743.044l-1.718,3.037a.548.548,0,0,0,.954.54L237,1.93a1.627,1.627,0,0,1,1.415-.834h.016a1.627,1.627,0,0,1,1.415.808l9.544,16.166a1.644,1.644,0,0,1-1.415,2.479h-3.01a.548.548,0,0,0,0,1.1h3.01a2.739,2.739,0,0,0,2.359-4.132Z"
                    transform="translate(-199.513 0)" fill="#062231" />
                <path
                    d="M43.057,107.411a11.782,11.782,0,1,0-5.051,4.716l3.75,3.75a3.265,3.265,0,0,0,2.324.962c2.909,0,4.674-3.732,2.56-5.846Zm.475-5.872a10.618,10.618,0,0,1-1.515,5.479h-14.7a1.644,1.644,0,0,1-1.428-2.459l7.809-13.67a10.626,10.626,0,0,1,1.673.267,1.914,1.914,0,0,0-.326,1.069V98.8a1.918,1.918,0,1,0,3.835,0V92.722A10.68,10.68,0,0,1,43.532,101.538Zm-5.753-9.475V98.8a.822.822,0,0,1-1.644,0V92.224a.821.821,0,0,1,.409-.71A10.625,10.625,0,0,1,37.779,92.063Zm-15.615,9.475A10.7,10.7,0,0,1,32.446,90.863l-7.513,13.151a2.739,2.739,0,0,0,2.379,4.1H41.264a10.68,10.68,0,0,1-19.1-6.575Zm23.7,13.332a2.27,2.27,0,0,1-3.338.233L39,111.577a11.873,11.873,0,0,0,3.446-3.223l3.414,3.414A2.288,2.288,0,0,1,45.868,114.87Z"
                    transform="translate(0 -84.002)" fill="#062231" />
                <path
                    d="M236.826,273.426a2.191,2.191,0,1,0,2.192,2.192A2.194,2.194,0,0,0,236.826,273.426Zm0,3.287a1.1,1.1,0,1,1,1.1-1.1A1.1,1.1,0,0,1,236.826,276.713Z"
                    transform="translate(-199.868 -255.89)" fill="#062231" />
            </g>
        </svg>,
        name:"Manually Check For Errors",
        time:"10 Minutes"
    },
    {
        id:10,
        icon:  <svg xmlns="http://www.w3.org/2000/svg" width="30.271" height="30.271" viewBox="0 0 30.271 30.271">
            <path
                d="M26.068,0H4.2A4.208,4.208,0,0,0,0,4.2V26.067a4.208,4.208,0,0,0,4.2,4.2H26.068a4.208,4.208,0,0,0,4.2-4.2V4.2a4.208,4.208,0,0,0-4.2-4.2ZM11.142,21.442V15.556H19.13v5.886Zm7.988,1.682v5.466H11.142V23.124Zm0-14.715v5.466H11.142V8.409Zm9.46,0v5.466H20.812V8.409ZM9.46,13.874H1.682V8.409H9.46ZM1.682,15.556H9.46v5.886H1.682Zm19.13,0H28.59v5.886H20.812ZM4.2,1.682H26.068A2.525,2.525,0,0,1,28.59,4.2V6.727H1.682V4.2A2.525,2.525,0,0,1,4.2,1.682ZM1.682,26.067V23.124H9.46v5.466H4.2a2.525,2.525,0,0,1-2.522-2.522Zm24.385,2.522H20.812V23.124H28.59v2.943a2.525,2.525,0,0,1-2.522,2.522Zm0,0"
                transform="translate(-0.001)" fill="#062231" />
        </svg>,
        name:"Create Report Spreadsheet",
        time:"10 Minutes"
    },
]



const OutreachEngine = () => {
    return (
        <>
            <section className="outreach-engine-section">
                <div className="cs-container">
                    <div className="engine-container">
                        <div>
                            <div className="text-content">
                                <Title text="How Many Hours Will You Save With Our Done-For-You Outreach Engine?"/>
                                <SubTitle text="We take care of every aspect when building out your outreach engine. Focus on what you do best. We’ll fill your calendar with your dream clients."/>
                                <LandingButton name="Build My Outreach Engine" pathname="#schedule"/>
                            </div>
                        </div>
                        <div className="dotted-content-container">
                            {engineData?.length > 0 &&
                            engineData?.map((data)=>{
                                return<Card key={data?.id} item={data}/>
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OutreachEngine;
