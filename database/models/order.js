const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    bill: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  // Order associations
  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User',
    });
    Order.belongsToMany(models.Meal, {
      foreignKey: 'orderId',
      through: 'OrderDetails',
    });
  };

  return Order;
};
export default order;
