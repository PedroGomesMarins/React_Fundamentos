import React from 'react'
import If from './If'

export default function UsuarioInfo(props) {

    const usuario = props.usuario || {}
    return (
        <div>
            <If teste={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </If>
            <If teste={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Desconhecido</strong>!
            </If>
        </div>
    )
}