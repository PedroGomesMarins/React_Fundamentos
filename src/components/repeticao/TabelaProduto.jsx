import React from 'react'
import produtos from '../../data/produto'
import './TabelaProdutos.css'

export default function TabelaProduto() {

    const listaProdutos = produtos.map((produto, i) => {
        return (
            <tr className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>
        )
    })
    return (
        <table className='TabelaProdutos'>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
            </tr>

            {listaProdutos}

        </table>
    )
}