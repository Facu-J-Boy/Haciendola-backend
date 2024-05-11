const Product = require('../models/Product');
const User = require('../models/User');

const controller = {
  createProduct: async (
    userId,
    {
      handle,
      title,
      description,
      SKU,
      grams,
      stock,
      price,
      comparePrice,
      barCode,
    }
  ) => {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return {
          status: 402,
          response: {
            error: 'usuario no encontrado',
          },
        };
      }
      const newProduct = await Product.create({
        handle,
        title,
        description,
        SKU,
        grams,
        stock,
        price,
        comparePrice,
        barCode,
      });
      await user.addProduct(newProduct);
      return {
        status: 200,
        response: { msg: 'Product created' },
      };
    } catch (error) {
      return {
        status: 402,
        response: { error: error },
      };
    }
  },
  productList: async (userId) => {
    const user = await User.findByPk(userId, {
      include: Product, // Incluir los productos asociados al usuario
    });
    if (!user) {
      return {
        status: 401,
        response: {
          msg: 'Nonexistent user',
        },
      };
    }
    return {
      status: 200,
      response: user.Products,
    };
  },
};

module.exports = controller;
