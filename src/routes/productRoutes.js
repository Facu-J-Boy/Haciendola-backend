const { Router } = require('express');
const controller = require('../controller/productController');
const router = Router();

router.post('/create/:userId', async (req, res) => {
  const { userId } = req.params;
  const {
    handle,
    title,
    description,
    grams,
    stock,
    price,
    comparePrice,
  } = req.body;
  try {
    const newProduct = await controller.createProduct(userId, {
      handle,
      title,
      description,
      grams,
      stock,
      price,
      comparePrice,
    });
    res.status(newProduct.status).json(newProduct.response);
  } catch (error) {
    res.status(500).json({ error });
  }
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

router.delete('/delete/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    const drop = await controller.deleteProduct(productId);
    console.log(drop);
    res.status(drop.status).json(drop.response);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/update/:productId', async (req, res) => {
  const { productId } = req.params;
  const {
    handle,
    title,
    description,
    grams,
    stock,
    price,
    comparePrice,
  } = req.body;
  try {
    const update = await controller.updateProduct(productId, {
      handle,
      title,
      description,
      grams,
      stock,
      price,
      comparePrice,
    });
    res.status(update.status).json(update.response);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
