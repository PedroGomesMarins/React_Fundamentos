import React from 'react'

export default function Aleatorio(props) {

    const sorteado = parseInt(Math.random() * (props.max - props.min) + props.min)
    return (
        <div>
            <h3>O Número sorteado entre {props.max} e {props.min} é:</h3>
            <h2><strong>{sorteado}</strong></h2>
        </div>
    )
}