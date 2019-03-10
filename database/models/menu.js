const menu = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    menuDate: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {});
  Menu.associate = (models) => {
    // associations can be defined here
    Menu.belongsToMany(models.Meal, {
      through: 'MenuMeals',
      foreignKey: 'menuId',
    });
  };
  return Menu;
};

export default menu;
