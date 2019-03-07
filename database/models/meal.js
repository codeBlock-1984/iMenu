const meal = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Meal.associate = (models) => {
    Meal.belongsToMany(models.Menu, {
      foreignKey: 'mealId',
      through: 'MenuDetail',
    });
    Meal.belongsToMany(models.Order, {
      foreignKey: 'mealId',
      through: 'OrderDetail',
    });
  };

  return Meal;
};
export default meal;
