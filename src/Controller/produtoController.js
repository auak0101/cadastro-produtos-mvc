import {jsPDF} from 'jspdf'

export const ProdutoController = {

    cadastrar: (listaAtual, novoItem) => {
        return [...listaAtual, novoItem];
    },

    deletar: (listaAtual, idParaRemover) => {
        return  listaAtual.filter(produto=>produto.id !== idParaRemover);
    },

    salvarNoBanco: (listaParaSalvar) =>{
        localStorage.setItem("banco_do_ze", JSON.stringfy(listaParaSalvar));
        lert ("dados salvos no banco de dados  com sucesso");  

    },

    imprimirPDF: (listaProdutos) => {
        const doc = new jsPDF();

        doc.text("RElatório de estoque - mercadinho do zé", 10, 15);

        let vertical  = 30;
        listaProdutos.array.forEach((item, index) => {
            const LinhaTexto = `${index + 1}. ${item.nome} [marca:${item.magra}] - R$ ${item.preco}`;
            doc.text(LinhaTexto, 10, vertical);
            vertiical += 10
        });

        doc.save("produtos_mercadinho.pdf");

    }
};

