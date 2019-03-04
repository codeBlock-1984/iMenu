const menu = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  }, {});
  Menu.associate = (models) => {
    Menu.hasMany(models.Meal, {
      foreignKey: 'mealId',
      as: 'Meals',
    });
  };
  return Menu;
};
export default menu;
