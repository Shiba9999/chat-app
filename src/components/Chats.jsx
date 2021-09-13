import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {ChatEngine} from"react-chat-engine"
import { Redirect, useHistory } from 'react-router'
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase'
function Chats() {
    const history=useHistory();
    const {user}=useAuth();
    const [loading,setLoading]=useState(true);
    console.log(user);

    const handleLogout=async()=>{
        await auth.signOut();
        history.push("/");
    
    }
    const getFile=async(url)=>{
        const response=await fetch(url);
        const data=await response.blob();
        return new File([data],"userPhoto.jpg",{type:"image/jpeg"})
    }
    useEffect(()=>{
       if(!user){
           history.push("/"); 
           return;
       }   
     axios.get('https://api.chatengine.io/users/me/',{
         headers:{
             "project-id":"7f4c3a97-1591-4a2d-b46d-4943cd6b795e",
             "user-name":user.email,
             "user-secret":user.uid,
         }
     }).then(()=>{
         setLoading(false);
         
     }).catch(()=>{
         let formdata=new FormData();
         formdata.append("email",user.email);
         formdata.append("username",user.email);
         formdata.append("secret",user.uid);
         getFile(user.photoURL).then((avatar)=>{
             formdata.append("avatar",avatar,avatar.name);
             axios.post("https://api.chatengine.io/users/",formdata,
             
                 {headers:{"PRIVATE-KEY":"d6ebd65a-c942-4627-ae5c-9c26f9f2e946"}}
             ).then(()=>setLoading(false))
             .catch((error)=>console.log(error))
         })
     })

    },[user,history])  

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    MyChat

                </div>
                <div className="logout-tab"
                onClick={handleLogout}
                >
                    Logout

                </div>

            </div>
            <ChatEngine
            height={"calc(100vh-66px)"}
            projectID={"7f4c3a97-1591-4a2d-b46d-4943cd6b795e"}
            userName={user.email}
            userSecret={user.uid}
             
            />
             
        </div>
    )
}

export default Chats
