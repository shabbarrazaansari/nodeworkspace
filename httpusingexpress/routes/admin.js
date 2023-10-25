const express = require('express');
const router = express.Router();
const path = require('path');
const { contactuscontroller } = require('../controller/contactus');
const { successController } = require('../controller/success');

router.get('/add-product', (req, res, next) => {
    //res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
  });
  
  router.post('/product', (req, res, next) => {
      console.log(req.body);
      res.redirect('/');
  });
  router.get('/contactus',contactuscontroller);
  router.get('/success',successController);
 
module.exports = router;