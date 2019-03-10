const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    orderDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Order.associate = (models) => {
    // associations can be defined here
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'Customer',
      onDelete: 'CASCADE',
    });
    Order.belongsToMany(models.Meal, {
      through: 'OrderMeals',
      foreignKey: 'orderId',
    });
  };
  return Order;
};

export default order;
