import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import './sign-in.styles.scss'


const SignIn = () => {

    const [email , setEmail ] = React.useState('')
    const [password, setPassword ] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault();
        setEmail('')
        setPassword('')
    }

    const handleChange = e => {
        const { value , name } = e.target;
        name === 'email' ? setEmail(value) : setPassword(value)
    }

    return (
        <div className="sign-in">
            <h2>I already have an account </h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email"
                    handleChange={handleChange} 
                    value={email} 
                    label="email"
                    required
                />
                <FormInput 
                    type="password" 
                    name="password" 
                    label="password"
                    handleChange={handleChange}
                    value={password} 
                    required
                />
                <CustomButton type="submit">
                    Sign In
                </CustomButton>            
            </form>
        </div>
    )
}

export default SignIn