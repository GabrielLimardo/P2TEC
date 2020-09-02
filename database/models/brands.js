module.exports = (sequelize, dataTypes ) => {
    const alias = "Brand";
    const cols = {
            name: dataTypes.STRING,
        
    }
    const config = {
        tableName: 'brands'
    }
    const Brand = sequelize.define(alias, cols, config);
    Brand.associate = function(models){
        Brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'brandId'
        })
    }

    return Brand;
}