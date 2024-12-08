const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3001; // Porta que a API irá usar

// Configuração do body-parser para analisar as requisições
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Endereço do servidor MySQL (geralmente localhost)
  user: 'root', // Usuário do MySQL - provavelmente root
  password: '', // Senha do MySQL - provavelmente em branco
  database: 'cadastro_produtos' // Nome do banco de dados
});

// Tenta conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida!');
});

// ... (código das rotas para as operações CRUD) ...

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});