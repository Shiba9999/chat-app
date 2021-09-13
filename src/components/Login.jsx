import React from 'react'
import { GoogleOutlined ,GithubOutlined  } from '@ant-design/icons';
import { auth } from '../firebase';
import firebase from "firebase"
function Login() {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Mychat</h2>
                <div className="login-button google"
                onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                <GoogleOutlined /> Sign in with Google

                </div>
                <br/> <br/>
                <div className="login-button facebook" 
                             onClick={()=> auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())}
                >
                <GithubOutlined />  Sign in with Github
                </div>


            </div>
        
        </div>
    )
}

export default Login
