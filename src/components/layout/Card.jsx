import React from 'react'
import './Card.css'

export default function Card (props){
    return(
        <div className="Card">
            <div className="Title" >Card</div>
            <div className="Content" >{props.titulo}</div>
        </div>
    )
}