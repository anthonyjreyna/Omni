import React, { useEffect, useState } from "react";

import placeholder from "../../../public/images/no-image-found.png";

const CustomImageContainer = ({src,imageStyle,alt, handleShow}) => {
    const [imageFile, setState] = useState(null);
    useEffect(() => {
        setState(src);
    }, [src]);

    return (
        <div onClick={handleShow} className={` img-container ${imageStyle}`}>
            <img
                src={imageFile}
                alt={alt}
                onError={() => {
                    // currentTarget.onerror = null; // prevents looping
                    setState(placeholder.src);
                }}
                loading="lazy"
            />
        </div>
    );
};
export default CustomImageContainer;
