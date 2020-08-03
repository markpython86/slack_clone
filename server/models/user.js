export default (sequelize,  DataTypes) => {
  const User = sequelize.define('user', {
    username:{
      type: DataTypes.STRING,
      uniqure: true,
    },
    email:{
      type: DataTypes.STRING,
      uniqure: true,
    },
    password: DataTypes.STRING,
  });
  User.associate = (models) => {
    User.belongsToMany(models.Team,{
      throught: 'member',
      foreignKey: 'userId'
    });
  };

  return User
}