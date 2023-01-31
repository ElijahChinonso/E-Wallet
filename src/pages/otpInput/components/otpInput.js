import React from 'react'
import OtpInputImage from "./otpInputImage";
import OptInputBox from "./otpInputBox";

export default function OtpInput() {
    return(
        <div className={'otpInput_div'}>
            <OtpInputImage/>
            <OptInputBox/>
        </div>
    )
}