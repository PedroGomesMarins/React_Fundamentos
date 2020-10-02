import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default function Familia(props) {
    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Daniel" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Tulina" sobrenome={props.sobrenome}/>
        </div>
    )
}