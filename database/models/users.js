module.exports = (sequelize, dataTypes) => {
    const alias = "User";
    const cols = {
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
        
    }
    const User = sequelize.define(alias, cols);
    return User;
}