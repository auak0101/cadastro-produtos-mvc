import React, { useState } from 'react';
import { produtoModel } from '../Model/produtoModel';


export function FormProduto({ aoCadastrar }) {
    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [preco, setPreco] = useState('');

    const enviarFormulario = (e) => {
        e.preventDefault();

        if (!nome || !marca || !preco) {
            alert("Por favor, digite todos os campos do produto!");
            return;
        }

        const idUnico = Date.now();

        const produtoFormatado = produtoModel.criar(idUnico, nome, marca, preco);

        aoCadastrar(produtoFormatado);

        setNome('');
        setMarca('');
        setPreco('');
    };

    return (

        <form onSubmit={enviarFormulario} className="bloco-formulario">
            <h3>Cadastrar Novo Produto</h3>

            <input type="text"
                placeholder="Nome do Produto"
                value={nome}
                onChange={(e) => setNome(e.target.value)} />

            <input type="text"
                placeholder="Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)} />

            <input type="number"
                step="0.01"
                placeholder="Preço R$"
                value={preco}
                onChange={(e) => setPreco(e.target.value)} />

            <button type='submit' className="btn-verde">🟢 Cadastrar Produto </button>
        </form>
    )

};
