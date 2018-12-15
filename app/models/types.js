module.exports = function(sequelize, DataTypes) {
    var Types = sequelize.define("Types", {
      // Giving the Author model a name of type STRING
      type: DataTypes.STRING
    });
  
    Types.associate = function(models) {
        Types.hasMany(models.Links, {
            onDelete: "cascade"
        });
    };

    return Types;
  };

