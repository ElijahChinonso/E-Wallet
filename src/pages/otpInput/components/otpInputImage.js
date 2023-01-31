import React from "react";
import '../styles/otpInputImage.css'
import OtpInputImg from '../../../asset/image/signUpImg.png'

export default function OtpInputImage() {
    return(
        <div className={'otpInputImg_div'}>
            <img src={OtpInputImg} className={'otpInputImg'} alt={'image'}/>
        </div>
    )
}