import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Planta = sequelize.define('Planta', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataPlantada: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dataTransplantada: {
      type: DataTypes.DATE,
      allowNull: true, // Pode ser opcional
    },
    local: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isMuda: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, // Se é muda ou planta adulta
    },
  }, {
    tableName: 'plantas',
  });

  // Associações
  Planta.associate = (models) => {
    // Relação muitos-para-muitos entre Planta e Fertilizante via AplicacaoFertilizante
    Planta.belongsToMany(models.Fertilizante, {
      through: models.AplicacaoFertilizante,
      foreignKey: 'plantaId',
      as: 'fertilizantesAplicados'
    });
  };

  return Planta;
};
