import { Sequelize } from 'sequelize';
import PlantaModel from '../models/PlantaModel.js';
import AplicacaoFertilizanteModel from '../models/AplicacaoFertilizanteModel.js';
import FertilizanteModel from '../models/FertilizanteModel.js'

const sequelize = new Sequelize('horta_database', 'user', 'password', {
    host: 'database',
    dialect: 'mysql',
  });

// Definindo os modelos
const Planta = PlantaModel(sequelize);
const Fertilizante = FertilizanteModel(sequelize);
const AplicacaoFertilizante = AplicacaoFertilizanteModel(sequelize);

// Definindo as associações
Planta.associate({ Fertilizante, AplicacaoFertilizante });
Fertilizante.associate({ Planta, AplicacaoFertilizante });

export default sequelize;