import React from 'react'
import './Emailrow.css'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { IconButton, Checkbox } from '@material-ui/core';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { selectOpenMail } from './features/mailSlice';
import {useDispatch} from 'react-redux';

function Emailrow({id, title,subject,description,time}) {

    const history = useHistory();
    const dispatch = useDispatch();
    const openMail=()=>{
        dispatch(selectOpenMail({
            id, title,subject,description,time  
        }))
    }
    return (
        <div onClick={openMail} className="emailrow">
            <div className="emailRow__options">
                <Checkbox/>
                <IconButton>
                    <StarOutlineIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>
            <div className="emailRow__title">
                {title}
            </div>
            <div className="emailRow__message">
                <h4>
                    {subject}
                    <span className="emailrow__description"> {description} </span>
                </h4>
            </div>
            <div className="emailRow__time">
                <p>{time}</p>
            </div>
        </div>
    )
}

export default Emailrow

