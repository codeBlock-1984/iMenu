const menu = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    menuDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {});
  Menu.associate = (models) => {
    Menu.belongsToMany(models.Meal, {
      foreignKey: 'menuId',
      through: 'MenuDetail',
    });
  };
  return Menu;
};
export default menu;
