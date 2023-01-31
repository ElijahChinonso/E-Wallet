import React from 'react'
import VerifyAccountImage from "./verifyAccImage";
import VerifyAccForm from "./verifyAccForm";


export default function VerifyAccount () {
    return(
        <div className={'verifyAccount_div'}>
            <VerifyAccountImage/>
            <VerifyAccForm/>
        </div>
    )
}