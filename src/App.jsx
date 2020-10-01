import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default function App(props) {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <hr></hr>
            <Fragmento />
            <hr></hr>
            <ComParametro nome="ComParametro" nota={6} />
            <hr></hr>
            <Primeiro />
            <hr></hr>
        </div>
    );
}