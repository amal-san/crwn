import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss'


const defaultState = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}



const SignUp = () => {

    const [userDetails , setUserDetails ] = React.useState(defaultState)
    const { displayName , email , password, confirmPassword } = userDetails;


    const handleSubmit = async ( event ) => {
        event.preventDefault();
        const { displayName , email , password, confirmPassword } = userDetails;

        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            console.log(user)
            console.log(displayName)

            await createUserProfileDocument(user,{displayName})

            setUserDetails(defaultState)

        } catch (error){
            console.error(error);
        }

    }

    const handleChange = event => {
        const {name , value } = event.target;
        userDetails[name] = value
        setUserDetails({...userDetails});
    }


    return (
        <div className="sign-up">
            <h2 className="title">I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    type="text"
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label = "Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name='email'
                    onChange={handleChange}
                    label = "Email"
                    value={email}
                    required
                />
                <FormInput
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label = "Password"
                    required
                />
                <FormInput
                    type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label = "Confirm Password"
                    required
                />
                <CustomButton type="submit">SIGN UP </CustomButton> 

            </form>
        </div>
    )
}

export default SignUp