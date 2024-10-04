import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Fertilizante = sequelize.define('Fertilizante', {
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
    descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'fertilizantes',
  });

  // Associações
  Fertilizante.associate = (models) => {
    // Relação muitos-para-muitos entre Fertilizante e Planta via AplicacaoFertilizante
    Fertilizante.belongsToMany(models.Planta, {
      through: models.AplicacaoFertilizante,
      foreignKey: 'fertilizanteId',
      as: 'plantasQueReceberam'
    });
  };

  return Fertilizante;
};
