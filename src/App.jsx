import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className='Cards'>
                <Card titulo="05# Componentes com Filhos" color="#00C8F8">
                    <Familia sobrenome="Gomes Marins"/>
                </Card>

                <Card titulo="04# Número Aleatório" color="#080">
                    <Aleatorio max={100} min={10} />
                </Card>

                <Card titulo="03# Fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="02# Nota Aluno">
                    <ComParametro nome="ComParametro" nota={6} />
                </Card>

                <Card titulo="#01 Primeiro">
                    <Primeiro />
                </Card>
            </div>
        </div>
    );
}