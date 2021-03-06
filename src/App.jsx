import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProduto'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className='Cards'>
                <Card titulo="10# Comunicação Indireta" color="#01343C">
                    <IndiretaPai>

                    </IndiretaPai>
                </Card>

                <Card titulo="09# Comunicação Direta" color="#59323C">
                    <DiretaPai/>
                </Card>

                <Card titulo="08# Rederização condicional" color="#982395">
                    <ParOuImpar numero={20} />
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                    <UsuarioInfo usuario={{ nome: '' }} />
                    <UsuarioInfo usuario={{ email: 'eu@ad.com' }} />
                </Card>

                <Card titulo="07# Tabela Produtos" color="#8A2BE2">
                    <TabelaProdutos />
                </Card>

                <Card titulo="06# Repetição Alunos" color="#FF4C65">
                    <ListaAlunos />
                </Card>

                <Card titulo="05# Componentes com Filhos" color="#00C8F8">
                    <Familia sobrenome="Gomes Marins">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Daniel" />
                        <FamiliaMembro nome="Tulina" />
                    </Familia>
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