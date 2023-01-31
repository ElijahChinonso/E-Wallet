import React from "react";
import '../styles/signUpForm.css'
import {useState} from "react";
import { Link } from "react-router-dom";

export default function SignUpForm () {
    const [firstName, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
        return(
        <div className={'signUpForm_div'}>
            <form className={'signUpForm'}>
                <h1 className={'welcome'}>Welcome!</h1>
                <h5 className={'welcomeText'}>Sign up by entering the information below</h5>

                <input
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder={'First name:'}
                    type={'firstName'}
                    name={'firstName'}
                    required
                />

                <input
                    value={lastname}
                    onChange={e => setLastName(e.target.value)}
                    placeholder={'Last name:'}
                    type={'lastName'}
                    name={'lastName'}
                    required
                />

                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={'Email:'}
                    type={'email'}
                    name={'email'}
                    required
                />

                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={'password:'}
                    type={"password"}
                    name={'password'}
                    required
                />

                <div className={'alreadyHaveAnAccount_div'}>
                    <p className={'already_have_an_account'}>Already have an account?</p>
                    <Link to={"/login"}>
                        <a className={'logIn_link'}>login</a>
                    </Link>    
                </div>

                <button className={'signUp_btn'}>Sign Up</button>
            </form>
        </div>
    )
        }