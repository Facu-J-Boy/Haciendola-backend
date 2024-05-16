const Product = require('../models/Product');
const User = require('../models/User');

const controller = {
  createProduct: async (
    userId,
    { title, description, grams, stock, price, comparePrice }
  ) => {
    try {
      if (
        !title ||
        !description ||
        !grams ||
        !stock ||
        !price ||
        !comparePrice
      ) {
        return {
          status: 400,
          response: { msg: 'Parametros requeridos', product: [] },
        };
      }
      const user = await User.findByPk(userId);
      if (!user) {
        return {
          status: 402,
          response: {
            msg: 'Usuario no encontrado',
            product: [],
          },
        };
      }
      const handle = title.toLowerCase().replace(/\s+/g, '-');
      const newProduct = await Product.create({
        handle,
        title: title.toUpperCase(),
        description,
        grams,
        stock,
        price,
        comparePrice,
      });
      await user.addProduct(newProduct);
      return {
        status: 200,
        response: { msg: 'Producto creado', product: newProduct },
      };
    } catch (error) {
      console.log('error: ', error);
      return {
        status: 402,
        response: error,
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
          msg: 'Usuario inexistente',
        },
      };
    }
    return {
      status: 200,
      response: user.Products,
    };
  },
  deleteProduct: async (productId) => {
    try {
      const product = await Product.findByPk(productId);
      const numDeleted = await Product.destroy({
        where: {
          id: productId,
        },
      });

      if (numDeleted === 1) {
        return {
          status: 200,
          response: { product, msg: 'Producto borrado' },
        };
      } else {
        return {
          status: 400,
          response: { msg: 'Producto no encontrado' },
        };
      }
    } catch (error) {
      return {
        status: 400,
        response: error,
      };
    }
  },
  updateProduct: async (
    productId,
    { title, description, grams, stock, price, comparePrice }
  ) => {
    try {
      const handle = title.toLowerCase().replace(/\s+/g, '-');
      const updatedProduct = await Product.update(
        {
          handle,
          title: title.toUpperCase(),
          description,
          grams,
          stock,
          price,
          comparePrice,
        },
        { where: { id: productId } }
      );

      if (updatedProduct[0] === 1) {
        return {
          status: 200,
          response: { msg: 'Producto editado con exito' },
        };
      } else {
        return {
          status: 404,
          response: { msg: 'producto no encontrado' },
        };
      }
    } catch (error) {
      return {
        status: 500,
        response: error,
      };
    }
  },
  getSingleProduct: async (productId) => {
    try {
      const product = await Product.findByPk(productId);
      if (product) {
        return {
          status: 200,
          response: { msg: null, product: product },
        };
      } else {
        return {
          status: 404,
          response: {
            msg: 'Producto no encontrado',
            product: null,
          },
        };
      }
    } catch (error) {}
  },
};

module.exports = controller;
