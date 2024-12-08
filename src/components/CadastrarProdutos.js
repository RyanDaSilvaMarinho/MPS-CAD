import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class CadastrarProdutos extends Component {
  constructor(props) {
    super(props);
    this.nomeProdutoRef = React.createRef();
    this.validadeRef = React.createRef();
    this.qtdMinimaEstoqueRef = React.createRef();
    this.valorUnitarioRef = React.createRef();
    this.tipoProdutoRef = React.createRef();
    this.codigoProdutoRef = React.createRef();
    this.nomeFornecedorRef = React.createRef();

    this.state = {
      produto: {
        nomeProduto: this.props.produto.nomeProduto,
        validade: this.props.produto.validade,
        qtdMinimaEstoque: this.props.produto.qtdMinimaEstoque,
        valorUnitario: this.props.produto.valorUnitario,
        tipoProduto: this.props.produto.tipoProduto,
        codigoProduto: this.props.produto.codigoProduto,
        nomeFornecedor: this.props.produto.nomeFornecedor,
      },
      redirecionar: false,
    };
  }

  handleProdutoForm = (e) => {
    e.preventDefault();
    const novoProduto = {
      nomeProduto: this.nomeProdutoRef.current.value,
      validade: this.validadeRef.current.value,
      qtdMinimaEstoque: parseInt(this.qtdMinimaEstoqueRef.current.value),
      valorUnitario: parseFloat(this.valorUnitarioRef.current.value),
      tipoProduto: this.tipoProdutoRef.current.value,
      codigoProduto: this.codigoProdutoRef.current.value,
      nomeFornecedor: this.nomeFornecedorRef.current.value
    };
    this.props.inserirProduto(novoProduto);
    this.setState({ redirecionar: true });
  };

  render() {
    if (this.state.redirecionar === true) {
      return <Navigate to="/" />;
    }

    return (
      <form onSubmit={this.handleProdutoForm}>
        <h0>Cadastrar Produtos</h0>
        <br></br>
        <h3><label htmlFor="fnomeProduto">Dados Gerais:</label></h3>
            <p>
                <label htmlFor="fnomeProduto">Nome do Produto:</label>
                <input type="text" id="fnomeProduto" required ref={this.nomeProdutoRef} />
            </p>

            <p>
                <label htmlFor="fvalidade">Validade:</label>
                <input type="date" id="fvalidade" required ref={this.validadeRef} />
            </p>

            <p>
                <label htmlFor="fqtdMinimaEstoque">QTDE Mínima no Estoque:</label>
                <input type="number" id="fqtdMinimaEstoque" required ref={this.qtdMinimaEstoqueRef} />
            </p>

            <p>
                <label htmlFor="fvalorUnitario">Valor Unitário:</label>
                <input type="number" step="0.01" id="fvalorUnitario" required ref={this.valorUnitarioRef} />
            </p>

            <p>
                <label htmlFor="ftipoProduto">Tipo de Produto:</label>
                <select id="ftipoProduto" required ref={this.tipoProdutoRef}>
                    <option value="eletrônico">Eletrônico</option>
                    <option value="perecível">Perecível</option>
                    <option value="não perecível">Não Perecível</option>
                    <option value="outros">Outros</option>
                </select>
            </p>

            <p>
                <label htmlFor="fcodigoProduto">Código do Produto:</label>
                <input type="text" id="fcodigoProduto" required ref={this.codigoProdutoRef} />
            </p>

            <p>
                <label htmlFor="fnomeFornecedor">Nome do Fornecedor:</label>
                <input type="text" id="fnomeFornecedor" required ref={this.nomeFornecedorRef} />
            </p>

            <p9>
            <button type="submit" className="botao cadastrar">Cadastrar</button>
            </p9>
        </form>
    );
  }
}

export default CadastrarProdutos;