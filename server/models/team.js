export default (sequelize,  DataTypes) => {
  const Team = sequelize.define('team', {
    name:{
      type: DataTypes.STRING,
      uniqure: true,
    },
    owner:{
      type: DataTypes.STRING,
      uniqure: true,
    },
    password: DataTypes.STRING,
  });
  Team.associate = (models) => {
    Team.belongsToMany(models.User,{
      throught: 'member',
      foreignKey: 'teamId'
    });
    Team.belongsTo(models.User,{
      foreignKey: 'owner'
    });
  };

  return Team
}