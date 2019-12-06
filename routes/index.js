var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/info', function(req, res, next) {
  res.render('index');
});

router.post('/info',function(req,res,next){
  res.send("welcome")

})
module.exports = router;
