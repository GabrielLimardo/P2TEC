module.exports = (sequelize, dataTypes) => {
    const alias = "User";
    const cols = {
        username: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        image: dataTypes.STRING,
        rol: dataTypes.INTEGER
        
    }
    const User = sequelize.define(alias, cols);
    return User;
}