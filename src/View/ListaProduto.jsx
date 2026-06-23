import React from "react";

export function ListaProduto({ produtos = [], aoDeletar }) {
    if (produtos.length === 0) {
        return <p className="texto-vazio">Nenhum produto em estoque. Digite um produto acima!</p>
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome de Produto</th>
                    <th>Marca</th>
                    <th>Preço</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {produtos.map((prod) => (

                    <tr key={prod.id}>
                        <td>{prod.nome}</td>
                        <td>{prod.marca}</td>
                        <td>R$ {prod.preco.toFixed(2)}</td>
                        <td>
                            <button onClick={() => aoDeletar(prod.id)} className="btn-vermelho">❌ Deletar</button>
                    </td>
                    </tr>

            ))}
        </tbody>

        </table >
    );
}