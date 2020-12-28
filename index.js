var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/greeting/:name', (req, res, next)=> {
  res.render('greeting',{name:req.params.name})
})


router.post('/data',(req,res,next)=>{

  res.redirect('data/'+req.body.name)


})

module.exports = router;
