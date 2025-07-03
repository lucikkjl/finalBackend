import { Sequelize, DataTypes } from 'sequelize';
import dbConfig from '../config/config.js';

import UserModel from './user.js';
import CategoryModel from './category.js';
import ProductModel from './product.js';
import OrderModel from './order.js';
import OrderProductModel from './OrderProduct.js'; // Verifique a capitalização do nome do arquivo!

// **CRUCIAL:** Obtém o ambiente atual (development ou production)
// No Railway, 'NODE_ENV' é automaticamente definido como 'production'.
const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env]; // Seleciona o objeto de configuração (development ou production)

// **CRUCIAL:** Inicializa o Sequelize USANDO o objeto 'config' selecionado
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port, // Inclui a porta, se definida na config
    dialect: config.dialect,
    operatorsAliases: false,
    dialectOptions: config.dialectOptions || {} // Para configurações SSL
  }
);

// Testando a conexão com o banco de dados
try {
  await sequelize.authenticate();
  console.log('Conectado com o Banco de Dados.');
} catch (err) {
  console.error('Não foi possível conectar ao banco de dados:', err);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = UserModel(sequelize, DataTypes);
db.Category = CategoryModel(sequelize, DataTypes);
db.Product = ProductModel(sequelize, DataTypes);
db.Order = OrderModel(sequelize, DataTypes);
db.OrderProduct = OrderProductModel(sequelize, DataTypes);

// Configura os relacionamentos entre as tabelas
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// Sincronização das tabelas com o banco de dados
try {
  await sequelize.sync({ force: false }); // force: false é crucial para não apagar dados!
  console.log('Tabelas sincronizadas.');
} catch (err) {
  console.error('Erro ao sincronizar as tabelas:', err);
}

export default db;