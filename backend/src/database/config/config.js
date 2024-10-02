import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('horta_database', 'user', 'password', {
    host: 'database',
    dialect: 'mysql',
  });

export default sequelize;