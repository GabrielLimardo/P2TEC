module.exports = (sequelize, dataTypes ) => {
    const alias = "categories";
    const cols = {
            name: dataTypes.STRING,
        
    }
    const config = {
        timestamps : true,
    }
    const categories = sequelize.define(alias, cols, config);
    categories.associate = function(models){
        categories.hasMany(models.products)
    }

    return categories;
}