module.exports = (sequelize, dataTypes ) => {
    const alias = "Product";
    const cols = {
        name: dataTypes.STRING,
        categoryId: dataTypes.INTEGER,
    }
    const Product = sequelize.define(alias, cols);
    Product.associate = function(models){
        Product.belongsTo(models.Category, {
                as: "category",
                foreingKey: "categoryId"
            });
    }

    return Product;
}