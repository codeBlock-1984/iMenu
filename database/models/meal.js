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
  /*  Meal.associate = (models) {
    Meal.hasMany(models.Menu, {
      foreignKey: 'menuId',
      as: 'Menus',
    });
    Meal.hasMany(models.Order, {
      foreignKey: 'orderId',
      as: 'Orders',
    });
  };
  */
  return Meal;
};
export default meal;
