module.exports = (sequelize, DataTypes) => {
  const MenuMeal = sequelize.define('MenuMeal', {
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      primaryKey: true,
      references: {
        model: 'Menus',
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
  MenuMeal.associate = (models) => {
    // associations can be defined here
  };
  return MenuMeal;
};
