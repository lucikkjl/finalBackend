export default {
  development: {
    username: "root",
    password: "",
    database: "ecommerce",
    host: "127.0.0.1",
    dialect: "mysql"
  },
    production: { // ESTA É A CONFIGURAÇÃO QUE O RAILWAY VAI USAR
        // Utilize as variáveis de ambiente que o Railway gera para o seu serviço MySQL
        username: process.env.MYSQL_USER, // Variável gerada pelo Railway
        password: process.env.MYSQL_PASSWORD, // Variável gerada pelo Railway
        database: process.env.MYSQL_DATABASE, // Variável gerada pelo Railway
        host: process.env.MYSQL_HOST, // Variável gerada pelo Railway
        port: process.env.MYSQL_PORT, // Variável gerada pelo Railway
        dialect: "mysql",
        // dialectOptions: {
        //     ssl: {
        //         require: true,
        //         rejectUnauthorized: false // Cuidado: desabilita verificação do certificado
        //     }
        // }
    }
};