const PostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define("PostCategory", {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    });

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'categoryId',
          otherKey: 'postId',
        });
    
        models.BlogPost.belongsToMany(models.Category, {
          as: 'products',
          through: PostCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId',
        });
      };

    return PostCategory;
};

module.exports = PostCategory;
