var express = require('express');
var router = express.Router();
const Person = require('../models/person');
const familytree = require('../helpers/familytree');
const Tree =  require('../helpers/tree');
const tree = new Tree(familytree);


//Index Route
router.get('/', function(req, res, next) {
  var peoples = tree.findAllNames().sort();
  res.render('index', { title: 'Family Tree', peoples: peoples}); 
});

//Paternal Uncle Route
router.get('/family/paternaluncle/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var paternaluncle = tree.paternaluncle(person);
  if(paternaluncle.length == 0){
    res.send("No Paternal Uncle");
  }
  else{
    res.send(paternaluncle.join(', '));
  }
  
});
//Maternal Uncle Route
router.get('/family/maternaluncle/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var maternaluncle = tree.maternaluncle(person);
  if(maternaluncle.length == 0){
    res.send("No Maternal Uncle");
  }
  else{
    res.send(maternaluncle.join(', '));
  }
});
//Paternal Aunt Route
router.get('/family/paternalaunt/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var paternalaunt = tree.paternalaunt(person);
  if(paternalaunt.length == 0){
    res.send("No Paternal Aunt");
  }
  else{
    res.send(paternalaunt.join(', '));
  }
});
//Maternal Aunt Route
router.get('/family/maternalaunt/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var maternalaunt = tree.maternalaunt(person);
  if(maternalaunt.length == 0){
    res.send("No Maternal Aunt");
  }
  else{
    res.send(maternalaunt.join(', '));
  }
});
//Sister in Law Route
router.get('/family/sisterinlaw/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var sisterinlaw = tree.sisterinlaw(person);
  if(sisterinlaw.length == 0){
    res.send("No Sister in Law");
  }
  else{
    res.send(sisterinlaw.join(', '));
  }
});
//Brother in Law Route
router.get('/family/brotherinlaw/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var brotherinlaw = tree.brotherinlaw(person);
  if(brotherinlaw.length == 0){
    res.send("No Brother in Law");
  }
  else{
    res.send(brotherinlaw.join(', '));
  }
});
//Cousins Route
router.get('/family/cousins/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var cousins = tree.cousins(person);
  if(cousins.length == 0){
    res.send("No Cousins");
  }
  else{
    res.send(cousins.join(', '));
  }
});
//Father Route
router.get('/family/father/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var father = tree.father(person); 
  if(father ===undefined){
    res.send("No Father");
  }
  else{
    res.send(father.name);
  }
});
//Mother Route
router.get('/family/mother/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var mother = tree.mother(person);
  if(mother ===undefined){
    res.send("No Mother");
  }
  else{
    res.send(mother.name);
  }
});
//Children Route
router.get('/family/children/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var children = tree.children(person);
  if(children.length == 0){
    res.send("No Children");
  }
  else{
    res.send(children.join(', '));
  }
  
});
//Sons Route
router.get('/family/sons/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var sons = tree.sons(person);
  if(sons.length == 0){
    res.send("No Sons");
  }
  else{
    res.send(sons.join(', '));
  }
});
//Daughters Route
router.get('/family/daughters/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var daughters = tree.daughters(person);
  if(daughters.length == 0){
    res.send("No Daughters");
  }
  else{
    res.send(daughters.join(', '));
  }
  
});
//Brohters Route
router.get('/family/brothers/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var brother = tree.brothers(person);
  if(brother.length == 0){
    res.send("No Brothers");
  }
  else{
    res.send(brother.join(', '));
  }
});
//Sisters Route
router.get('/family/sisters/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var sisters = tree.sisters(person);
  if(sisters.length == 0){
    res.send("No Sisters");
  }
  else{
    res.send(sisters.join(', '));
  }
});
//Grand Daughters Route
router.get('/family/granddaughter/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var granddaughters = tree.granddaughter(person);
  if(granddaughters.length == 0){
    res.send("No Grand Daughters");
  }
  else{
    res.send(granddaughters.join(', '));
  }
});
//Grand Son Route
router.get('/family/grandson/:person', function(req, res, next) {
  var person = tree.search(req.params.person);
  var grandson = tree.grandson(person);
  if(grandson.length == 0){
    res.send("No Grand Son");
  }
  else{
    res.send(grandson.join(', '));
  }
});

module.exports = router;

