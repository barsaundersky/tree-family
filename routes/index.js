var express = require('express');
var router = express.Router();
const Person = require('../models/person');
const familytree = require('../helpers/familytree');
const Tree =  require('../helpers/tree');
const tree = new Tree(familytree);


/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Teste' });
  
});

router.get('/family/brothers', function(req, res, next) {
  
  var person = tree.search('Satya');
  var brother = tree.children(person);
  console.log(brother);
  res.render('index', { title: 'Teste' });
  //res.redirect('/');

});
router.post('/family/addscript',function(req,res,next){
  var stringtexto = require('../helpers/script.js');

  
  var year = req.body.year;

  session
      .run(stringtexto)
      .then(function(result){
          res.redirect('/');

          session.close();

      })
      .catch(function(err){
          console.log(err);
      });
  res.redirect('/');
});
module.exports = router;

