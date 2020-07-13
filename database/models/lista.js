module.exports = (sequelize, dataTypes ) => {
    const alias = "";
    const cols = {
        id: {
            
        },
        title: {
            type:dataTypes.STRING,
        },
        
    }
    const config = {
        timestamps : true,
    }
    const Products = sequelize.define(alias, cols, config);

    return Products;
}