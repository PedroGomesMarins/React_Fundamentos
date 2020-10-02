import React from 'react'
import alunos from '../../data/alunos'

export default function ListaAlunos() {

    const lis = alunos.map((aluno) => {
        return (
            <li>
                {aluno.id}) {aluno.nome} - {aluno.nota} 
            </li>
        )
    })

    return (
        <div>
            <ul>
               {lis}
            </ul>
        </div>
    )
}