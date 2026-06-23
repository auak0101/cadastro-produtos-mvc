import React, { useState } from 'react';
import { FormProduto } from './View/FormProduto';
import { ListaProduto } from './View/ListaProduto';
import { ProdutoController } from './Controller/produtoController';


export default function App() {
    // Inicializa o estado dos produtos carregando do localStorage se existir
    const [produtos, setProdutos] = useState(() => {
        const salvos = localStorage.getItem("banco_do_ze");

        return salvos ? JSON.parse(salvo) : [];
    });
    const handleCadastrar = (novoProduto) => {
        const novalista = ProdutoController.cadastrar(produtos, novoProduto);
        setProdutos(novalista);
    };


    const handleDeletar = (id) => {

        const novaLista = ProdutoController.deletar(produtos, id);
        setProdutos(novaLista);

    };

    const handleSalvar = () => {

        ProdutoController.salvarNoBanco(produtos);

    };

    const handleImprimir = () => {

        ProdutoController.imprimirPDF(produtos);

    };


 return (
    <div className="container-app">
        <h1>Gerenciador de Beleza MVC</h1>
        <p className="subtitulo">Projeto Prático para Iniciantes</p>

        <FormProduto aoCadastrar={handleCadastrar} />

        {/* Agrupamento dos botões do meio corrigidos com classe */}
        <div className="container-acoes">
            <button onClick={handleSalvar} className='btn-Azul'>
                💾 Salvar no Banco
            </button>
            <button onClick={handleImprimir} className="btn-cinza">
                📄 Imprimir PDF
            </button>
        </div>

        <h2 className="titulo-produtos">Produtos Cadastrados</h2>
        <ListaProduto produtos={produtos} aoDeletar={handleDeletar} />
    </div>
);
}


