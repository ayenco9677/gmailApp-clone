import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core';
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux'
import './SendMail.css'
import {closeSendMessage} from './features/mailSlice'
import firebase from 'firebase'
import db from './firebase'

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit=(formData)=>{
        console.log(formData)
        db.collection('mails').add(
            {
                To:formData.To,
                Subject:formData.Subject,
                Message:formData.Message,
                timeStamp:firebase.firestore.FIELDVALUE.serverTimestamp,
            }
        )
    }
    return (
        <div className="sendmail">
            <div className="sendmail__Header">
                <h3>New Message</h3>
                <CloseIcon className="sendmail__close" onClick={()=>dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" placeholder="To" type="text" ref={register({required:true})} />
                {errors.to && <p className="sendmail__error"> To is required</p>}
                <input name="subject" placeholder="Subject" type="text" ref={register({required:true})}/>
                {errors.subject && <p className="sendmail__error"> Subject is required</p>}
                <input name="message" placeholder="Message" className="sendmail__message" type="text" ref={register({required:true})}/>
                {errors.message && <p className="sendmail__error"> Message is required</p>}
            <div className="sendmail__options">
                <Button className="sendmail__send" variant="contained" color="primary" type="submit"> Send </Button>
            </div>
            </form>  
        </div>
    )
}

export default SendMail
