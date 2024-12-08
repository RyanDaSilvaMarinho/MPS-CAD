import React from 'react';

const TabelaProdutos = ({ produtos, removerProduto }) => {
  return (
    <div className='produtos'>
      <h2>Produtos Cadastrados</h2>
      {produtos.length === 0 && <h2>Nenhum produto cadastrado!</h2>}
      {produtos.length > 0 && (
        <table className='tabela'>
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Validade</th>
              <th>Qtd. Mínima</th>
              <th>Valor Unitário</th>
              <th>Tipo</th>
              <th>Código</th>
              <th>Fornecedor</th>
              <th width="9%"></th> {/* Largura ajustada */}
            </tr>
          </thead>
          <tbody>
            {produtos.map(produto => (
              <tr key={produto.codigoProduto}>
                <td>{produto.nomeProduto}</td>
                <td>{produto.validade}</td>
                <td>{produto.qtdMinimaEstoque}</td>
                <td>{produto.valorUnitario}</td>
                <td>{produto.tipoProduto}</td>
                <td>{produto.codigoProduto}</td>
                <td>{produto.nomeFornecedor}</td>
                <td>
                  <button className='botao remover'
                    onClick={() => { removerProduto(produto); }}
                  >Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TabelaProdutos;