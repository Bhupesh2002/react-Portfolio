import React from "react";
import { ThreeDot } from "react-loading-indicators";

let Loading = () => {
    return(
        <div className="loading-component">
        <ThreeDot variant="bounce" color="#e92e18" size="large" text="LOADING....." textColor="" />
        </div>
    )
}

export default Loading;