module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        username: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        image: dataTypes.STRING,
        rol: dataTypes.INTEGER,
        address : dataTypes.STRING,
        floor : dataTypes.STRING,
        PostalCode : dataTypes.STRING,
        location : dataTypes.STRING,
        Province: dataTypes.STRING
        
    });
    User.associate = function(models) {
        User.hasMany(
            models.Comment,
            {
              as: 'Comment',
              foreignKey: 'userId'
            }
          );
    }
    return User;
}