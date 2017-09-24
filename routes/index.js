var express = require('express');
var router = express.Router();
const Person = require('../models/person');
const familytree = require('../helpers/familytree');
const Tree =  require('../helpers/tree');
const tree = new Tree(familytree);



router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Teste' });
  
});
router.get('/family/paternaluncle', function(req, res, next) {
  var person = tree.search(req.query.person);
  var paternaluncle = tree.paternaluncle(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/maternaluncle', function(req, res, next) {
  var person = tree.search(req.query.person);
  var maternaluncle = tree.maternaluncle(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/paternalaunt', function(req, res, next) {
  var person = tree.search(req.query.person);
  var paternalaunt = tree.paternalaunt(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/maternalaunt', function(req, res, next) {
  var person = tree.search(req.query.person);
  var maternalaunt = tree.maternalaunt(person);
  

  res.render('index', { title: 'Teste' });

});

router.get('/family/sisterinlaw', function(req, res, next) {
  var person = tree.search(req.query.person);
  var sisterinlaw = tree.sisterinlaw(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/brotherinlaw', function(req, res, next) {
  var person = tree.search(req.query.person);
  var brotherinlaw = tree.brotherinlaw(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/cousins', function(req, res, next) {
  var person = tree.search(req.query.person);
  var cousins = tree.cousins(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/father', function(req, res, next) {
  var person = tree.search(req.query.person);
  var father = tree.father(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/mother', function(req, res, next) {
  var person = tree.search(req.query.person);
  var mother = tree.mother(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/children', function(req, res, next) {
  var person = tree.search(req.query.person);
  var children = tree.children(person);
  

  res.render('index', { title: 'Teste' });

});

router.get('/family/sons', function(req, res, next) {
  var person = tree.search(req.query.person);
  var sons = tree.sons(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/daughters', function(req, res, next) {
  var person = tree.search(req.query.person);
  var daughters = tree.daughters(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/brothers', function(req, res, next) {
  var person = tree.search(req.query.person);
  var brother = tree.brothers(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/sisters', function(req, res, next) {
  var person = tree.search(req.query.person);
  var sisters = tree.sisters(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/granddaughter', function(req, res, next) {
  var person = tree.search(req.query.person);
  var granddaughters = tree.granddaughter(person);
  

  res.render('index', { title: 'Teste' });

});
router.get('/family/grandson', function(req, res, next) {
  var person = tree.search(req.query.person);
  var grandson = tree.grandson(person);
  

  res.render('index', { title: 'Teste' });

});

module.exports = router;

