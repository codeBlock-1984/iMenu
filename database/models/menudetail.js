module.exports = (sequelize, DataTypes) => {
  const MenuDetail = sequelize.define('MenuDetail', {
    mealId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Meals',
        key: 'id',
      },
    },
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Menus',
        key: 'id',
      },
    },
  }, {});
  MenuDetail.associate = (models) => {
  };
  return MenuDetail;
};
