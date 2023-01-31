import React from "react";
import OtpInputActionImage from "./otpInputActionImage";
import OtpInputActionBox from "./otpInputActionBox";

export default function OtpInputAction () {
    return(
        <div className={'otpInputAction_div'}>
            <OtpInputActionImage/>
            <OtpInputActionBox/>
        </div>
    )
}