import React from 'react'

const LoginPage = () => {
    return (
        <div className='login-container'>
            <img src="/login-img.png" className='login-img' />
            <img src='/Vector.png' className='login-img-vector' />
            <img src="/Ellipse.png" className='login-img-ellipse' />
            <div className='login-box'>
                <h1>Mobile Number</h1>
                <div className='login-box-inputs'>
                    <input type='text' className='input-box input-box-code' placeholder='+91' />
                    <input type='text' className='input-box input-box-number' placeholder='XXXXXXXXXX' />
                </div>
                <div className='checkbox'>
                    <label>
                        <input type='checkbox' className='login-box-checkbox' />

                    </label>
                    <span className='login-box-checkbox-text'>by continuing , you agree to CryVoult’s Terms and Services and Privacy Policy</span>
                </div>
                <button className='sendOtpbtn'>Send OTP</button>
            </div>
        </div>
    )
}

export default LoginPage