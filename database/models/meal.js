const meal = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
  }, {});
  Meal.associate = (models) => {
    // associations can be defined here
    Meal.belongsToMany(models.Menu, {
      through: 'MenuMeals',
      foreignKey: 'mealId',
    });
    Meal.belongsToMany(models.Order, {
      through: 'OrderMeals',
      foreignKey: 'mealId',
    });
  };
  return Meal;
};

export default meal;
