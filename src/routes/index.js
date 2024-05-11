const { Router } = require('express');

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');

const router = Router();

router.use('/user', userRoutes);
router.use('/product', productRoutes);

module.exports = router;
