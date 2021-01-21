import React from 'react'
import {Button} from '@material-ui/core'
import './Login.css'
import {login} from './features/userSlice'
import {useDispatch} from 'react-redux'
import {auth, provider} from './firebase';

function Login() {

    const dispatch = useDispatch();
    const signIn=()=>{
        auth.signInWithPopup(provider).then((user)=>{
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoUrl,
            }))
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://res.cloudinary.com/dhpm6cjag/image/upload/v1609608994/gmail__login_ha0svf.webp" alt=""/>
                <Button onClick= {signIn} variant="contained" color="primary"> Sign In</Button>
            </div> 
        </div>
    )
}

export default Login
