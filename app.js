require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
//const swaggerUi = require('swagger-ui-express');
//const swaggerFile = require('./swagger-output.json');

const usuarioRoutes = require('./src/routes/usuarioRoutes');
const loginRoutes = require('./src/routes/loginRoutes');

const app = express();

app.use(bodyParser.json());

// Documentação Swagger
//app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Rotas
app.use('/usuarios', usuarioRoutes);
app.use(loginRoutes);

// Porta do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});