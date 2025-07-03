export default {
  development: {
    username: "root",
    password: "",
    database: "ecommerce",
    host: "127.0.0.1",
    dialect: "mysql"
  },
    production: { // ESTA É A CONFIGURAÇÃO QUE O RAILWAY VAI USAR
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        dialect: "mysql", // <-- CORREÇÃO: Adicione esta linha!
        // Se o Railway ou seu setup exigir SSL, descomente e ajuste.
        // dialectOptions: {
        //     ssl: {
        //         require: true,
        //         rejectUnauthorized: false
        //     }
        // }
    }
};