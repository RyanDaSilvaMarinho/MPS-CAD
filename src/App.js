import React, { Component } from 'react';
import Menu from './components/Menu';
import TabelaProdutos from './components/TabelaProdutos';
import NotFound from './components/NotFound';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import CadastrarProdutos from './components/CadastrarProdutos'; 

class App extends Component {
  state = {
    produtos: [
      {
        nomeProduto: "Notebook",
        validade: "2025-12-31",
        qtdMinimaEstoque: 10,
        valorUnitario: 2500.00,
        tipoProduto: "eletrônico",
        codigoProduto: "NB-123",
        nomeFornecedor: "Fornecedor A"
      },
      // ... outros produtos com os novos atributos
    ]
  };

  inserirProduto = (produto) => {
    // Lógica para gerar um novo ID ou código único para o produto
    // ...

    this.setState({
      produtos: [...this.state.produtos, produto],
    });
  }

  editarProduto = (produto) => {
    const index = this.state.produtos.findIndex((p) => p.codigoProduto === produto.codigoProduto);
    const newProdutos = [...this.state.produtos.slice(0, index), produto, ...this.state.produtos.slice(index + 1)];
    this.setState({ produtos: newProdutos });
  }

  removerProduto = produto => {
    if (window.confirm("Remover esse Produto?")) {
      const produtos = this.state.produtos.filter(p => p.codigoProduto !== produto.codigoProduto);
      this.setState({ produtos });
    }
  }

  render() {
    return (
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={
            <TabelaProdutos
              produtos={this.state.produtos}
              removerProduto={this.removerProduto}
            />}
          />
          <Route path="/cadastrar" element={
            <div>
              <CadastrarProdutos
                inserirProduto={this.inserirProduto}
                produto={{ 
                  nomeProduto: "", 
                  validade: "", 
                  qtdMinimaEstoque: 0, 
                  valorUnitario: 0.0, 
                  tipoProduto: "eletrônico", 
                  codigoProduto: "", 
                  nomeFornecedor: "" 
                }}
              />
              <TabelaProdutos
                produtos={this.state.produtos}
                removerProduto={this.removerProduto}
              />
            </div>
          }
          />
          <Route path="/editar/:codigoProduto" element={ 
            <CadastrarProdutosWrapper
              produtos={this.state.produtos}
              editarProduto={this.editarProduto}
            />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}

class CadastrarProdutosWrapper extends Component {
  render() {
    const { produtos, editarProduto } = this.props;
    const codigoProduto = window.location.pathname.split("/").pop();
    const produto = produtos.find((produto) => produto.codigoProduto === codigoProduto);

    if (produto) {
      return <CadastrarProdutos editarProduto={editarProduto} produto={produto} />;
    } else {
      return <Navigate to="/" />;
    }
  }
}

export default App;