module.exports = (sequelize, dataTypes ) => {
    const alias = "products";
    const cols = {
        name: dataTypes.STRING,
        categoryId: dataTypes.INTEGER,
}
    const config = {
        timestamps : true,
    }
    const Products = sequelize.define(alias, cols, config);
    Products.associate = function(models){
        Products.belongsTo(models.categories)
    }

    return Products;
}