var express = require('express');
var router = express.Router();
const Person = require('../models/person');
const familytree = require('../helpers/familytree');
const Tree =  require('../helpers/tree');
const tree = new Tree(familytree);



router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Teste' });
  
  
});
router.get('/teste', function(req, res, next) {
  
  var person = tree.search('Chika');
  var maternalaunt = tree.maternalaunt(person);
  
 //res.render('index', { title: 'Teste' });
  console.log(maternalaunt);
  
});

router.get('/family/paternaluncle', function(req, res, next) {
  var person = tree.search(req.query.person);
  var paternaluncle = tree.paternaluncle(person);
  

  res.send(paternaluncle);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/maternaluncle', function(req, res, next) {
  var person = tree.search(req.query.person);
  var maternaluncle = tree.maternaluncle(person);
  

  res.send(maternaluncle);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/paternalaunt', function(req, res, next) {
  var person = tree.search(req.query.person);
  var paternalaunt = tree.paternalaunt(person);
  

  res.send(paternalaunt);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/maternalaunt', function(req, res, next) {
  var person = tree.search(req.query.person);
  var maternalaunt = tree.maternalaunt(person);
  

  res.send(maternalaunt);
  //res.render('index', { title: 'Teste' });

});

router.get('/family/sisterinlaw', function(req, res, next) {
  var person = tree.search(req.query.person);
  var sisterinlaw = tree.sisterinlaw(person);
  

  res.send(sisterinlaw);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/brotherinlaw', function(req, res, next) {
  var person = tree.search(req.query.person);
  var brotherinlaw = tree.brotherinlaw(person);
  

  res.send(brotherinlaw);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/cousins', function(req, res, next) {
  var person = tree.search(req.query.person);
  var cousins = tree.cousins(person);
  

  res.send(cousins);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/father', function(req, res, next) {
  var person = tree.search(req.query.person);
  var father = tree.father(person);
  

  res.send(father);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/mother', function(req, res, next) {
  var person = tree.search(req.query.person);
  var mother = tree.mother(person);
  

  res.send(mother);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/children', function(req, res, next) {
  var person = tree.search(req.query.person);
  var children = tree.children(person);
  

  res.send(children);
  //res.render('index', { title: 'Teste' });

});

router.get('/family/sons', function(req, res, next) {
  var person = tree.search(req.query.person);
  var sons = tree.sons(person);
  

  res.send(sons);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/daughters', function(req, res, next) {
  var person = tree.search(req.query.person);
  var daughters = tree.daughters(person);
  

  res.send(daughters);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/brothers', function(req, res, next) {
  var person = tree.search(req.query.person);
  var brother = tree.brothers(person);
  

  res.send(brother);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/sisters', function(req, res, next) {
  var person = tree.search(req.query.person);
  var sisters = tree.sisters(person);
  
  res.send(sisters);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/granddaughter', function(req, res, next) {
  var person = tree.search(req.query.person);
  var granddaughters = tree.granddaughter(person);
  

  res.send(granddaughters);
  //res.render('index', { title: 'Teste' });

});
router.get('/family/grandson', function(req, res, next) {
  var person = tree.search(req.query.person);
  var grandson = tree.grandson(person);
  

  res.send(grandson);
  //res.render('index', { title: 'Teste' });

});

module.exports = router;

