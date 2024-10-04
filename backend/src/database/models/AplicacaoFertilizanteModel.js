import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const AplicacaoFertilizante = sequelize.define('AplicacaoFertilizante', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    quantidade: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    dataAplicacao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    plantaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Planta',
        key: 'id',
      }
    },
    fertilizanteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Fertilizante',
        key: 'id',
      }
    }
  }, {
    tableName: 'aplicacoes_fertilizantes',
  });

  return AplicacaoFertilizante;
};
