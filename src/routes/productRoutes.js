const { Router } = require('express');
const controller = require('../controller/productController');
const sequelize = require('../db');
const router = Router();

router.post('/create/:userId', async (req, res) => {
  const { userId } = req.params;
  const {
    handle,
    title,
    description,
    SKU,
    grams,
    stock,
    price,
    comparePrice,
    barCode,
  } = req.body;
  // try {
  const newProduct = await controller.createProduct(userId, {
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
  res.status(newProduct.status).json(newProduct.response);
  // } catch (error) {
  //   res.status(500).json({ error });
  // }
});

router.get('/list/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const list = await controller.productList(userId);
    res.status(list.status).json(list.response);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
