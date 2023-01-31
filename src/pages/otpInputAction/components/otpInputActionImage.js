import React from "react";
import '../styles/otpInputActionImage.css'
import OtpInputActionImg from '../../../asset/image/signUpImg.png'

export default function OtpInputActionImage() {
    return(
        <div className={'otpInputImg_div'}>
            <img src={OtpInputActionImg} className={'otpInputActionImg'} alt={'image'}/>
        </div>
    )
}