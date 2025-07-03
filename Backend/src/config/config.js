export default {
  development: {
    username: "root",
    password: "",
    database: "ecommerce",
    host: "127.0.0.1",
    dialect: "mysql"
  },
    production: { 
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT, 
        dialectOptions: {
            // ssl: {
            //     require: true,
            //     rejectUnauthorized: false
            // }
        }
    }
};