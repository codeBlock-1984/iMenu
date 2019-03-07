module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('orderDetail', {
    mealId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Meals',
        key: 'id',
      },
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Orders',
        key: 'id',
      },
    },
  }, {});
  OrderDetail.associate = (models) => {
  };
  return OrderDetail;
};
