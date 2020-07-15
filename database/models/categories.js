module.exports = (sequelize, dataTypes ) => {
    const alias = "Category";
    const cols = {
            name: dataTypes.STRING,
        
    }
    const config = {
        tableName: 'categories'
    }
    const Category = sequelize.define(alias, cols, config);
    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'categoryId'
        })
    }

    return Category;
}