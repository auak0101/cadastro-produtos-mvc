export const produtoModel = {
    criar: (id, nome, marca, preco) => {

        return{
            id: id,
            nome: nome,
            marca:marca,
            preco: Number(preco)
        };
    }

};