module.exports = (sequelize, dataTypes ) => {
    const alias = "Comment";
    const cols = {
        name: dataTypes.STRING,
        userId: dataTypes.INTEGER,
        productId: dataTypes.INTEGER,
        
    }
    const Comment = sequelize.define(alias, cols);
    Comment.associate = function(models){
        Comment.belongsTo(models.User, {
                as: "user",
                foreingKey: "userId"
            });
            
    
        Comment.belongsTo(models.Product, {
                as: "product",
                foreingKey: "productId"
            });
    }
    return Comment;
}