import React from 'react'

export default function ComParamentro(props) {

    const status = props.nota >= 7 ? 'Aprovado':'Reprovado';
    return (
        <div>
            <h2>{props.nome}</h2>
            <p>{props.nota}</p>
            <p>{status}</p>
        </div>
    )
}