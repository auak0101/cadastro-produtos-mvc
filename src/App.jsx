import React, { useState } from 'react';
import { FormProduto } from './View/FormProduto';
import { ListaProduto } from './View/ListaProduto';
import { ProdutoController } from './Controller/produtoController';


export default function App() {
    // Inicializa o estado dos produtos carregando do localStorage se existir
    const [produtos, setProdutos] = useState(() => {
        const salvos = localStorage.getItem("banco_do_ze");

        return salvos ? JSON.parse(salvos) : [];
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
    <div style={styles.windowContainer}>
        {/* Barra de Título com os três botões solicitados */}
        <div style={styles.titleBar}>
            <div style={styles.titleText}>
                <span style={styles.icon}>🛒</span>
                Mercadinho do seu Zé - Cadastro de Produtos
            </div>
            
            <div style={styles.buttonGroup}>
                <button style={{ ...styles.sysButton, ...styles.minimizeBtn }} title="Minimizar">
                    <span style={styles.minimizeIcon}></span>
                </button>
                <button style={{ ...styles.sysButton, ...styles.maximizeBtn }} title="Maximizar">
                    <span style={styles.maximizeIcon}></span>
                </button>
                <button style={{ ...styles.sysButton, ...styles.closeBtn }} title="Fechar">
                    X
                </button>
            </div>
        </div>

        {/* Área de Conteúdo original dentro do corpo da janela */}
        <div style={styles.windowBody}>
             
                <h2>Mercadinho do seu zé    </h2>
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
    </div>
);
}

// Estilos solicitados do arquivo enviado
const styles = {
    windowContainer: {
      border: '3px solid #0054E3',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      backgroundColor: '#ECE9D8',
      boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
      margin: '20px',
      overflow: 'hidden',
      boxSizing: 'border-box',
    },
    titleBar: {
      background: 'linear-gradient(to bottom, #0058E6 0%, #0A6ECC 6%, #117BE1 14%, #117BE1 20%, #0A6ECC 54%, #0054E3 89%, #003CA5 100%)',
      padding: '4px 8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#FFFFFF',
      textShadow: '1px 1px 1px #0F3775',
      userSelect: 'none',
    },
    titleText: {
      fontFamily: 'Tahoma, sans-serif',
      fontSize: '13px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    icon: {
      fontSize: '14px',
    },
    buttonGroup: {
      display: 'flex',
      gap: '2px',
    },
    sysButton: {
      width: '21px',
      height: '21px',
      border: '1px solid #FFFFFF',
      borderRadius: '3px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'inset -1px -1px 1px rgba(0,0,0,0.2)',
      outline: 'none',
    },
    minimizeBtn: {
      background: 'linear-gradient(to bottom, #3A7CE0, #1449A3)',
      position: 'relative',
    },
    minimizeIcon: {
      width: '7px',
      height: '2px',
      backgroundColor: '#FFFFFF',
      position: 'absolute',
      bottom: '4px',
    },
    maximizeBtn: {
      background: 'linear-gradient(to bottom, #3A7CE0, #1449A3)',
      position: 'relative',
    },
    maximizeIcon: {
      width: '8px',
      height: '7px',
      border: '2px solid #FFFFFF',
      borderTopWidth: '2px',
      boxSizing: 'border-box',
    },
    closeBtn: {
      background: 'linear-gradient(to bottom, #E7623E, #B62000)',
      color: '#FFFFFF',
      fontFamily: 'Marlett, Arial, sans-serif',
      fontSize: '11px',
      fontWeight: 'bold',
      textShadow: '1px 1px 1px #701100',
    },
    windowBody: {
      margin: '0px',
      padding: '16px',
      backgroundColor: '#FFFFFF',
      border: '1px solid #D6D2B1',
      minHeight: '150px',
    },
};