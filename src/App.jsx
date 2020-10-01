import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default function App(props) {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Card titulo="Número Aleatório">
                <Aleatorio max={100} min={10} />
            </Card>

            <Card titulo="Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="Nota Aluno">
                <ComParametro nome="ComParametro" nota={6} />
            </Card>

            <Card titulo="Primeiro">
                <Primeiro />
            </Card>
        </div>
    );
}