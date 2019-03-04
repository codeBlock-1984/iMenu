const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  }, {});
  /*
  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User',
    });
    Order.hasMany(models.Meal, {
      foreignKey: 'mealId',
      as: 'Meals',
    });
  };
  */
  return Order;
};
export default order;
