module.exports = (sequelize, DataTypes) => {
  const OrderMeal = sequelize.define('OrderMeal', {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      primaryKey: true,
      references: {
        model: 'Orders',
        key: 'id',
      },
    },
    mealId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      primaryKey: true,
      references: {
        model: 'Meals',
        key: 'id',
      },
    },
  }, {});
  OrderMeal.associate = (models) => {
    // associations can be defined here
  };
  return OrderMeal;
};
