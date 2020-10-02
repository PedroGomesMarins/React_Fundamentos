import React from 'react'
import alunos from '../../data/alunos'

export default function ListaAlunos() {

    const alunosLista = alunos.map((aluno) => {
        return (
            <li>
                {aluno.id}) {aluno.nome} - {aluno.nota} 
            </li>
        )
    })

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
               {alunosLista}
            </ul>
        </div>
    )
}