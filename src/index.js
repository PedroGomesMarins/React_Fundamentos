import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

ReactDOM.render(
    <div>
        <Primeiro/>
        <hr></hr>
        <ComParametro nome="Lina" nota= {6}/>
        <hr></hr>
        <Fragmento/>
    </div>,
    document.getElementById('root'))