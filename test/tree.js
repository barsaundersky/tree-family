var expect    = require("chai").expect;
var Tree = require("../helpers/tree");
const familytree = require('../helpers/familytree');
const tree = new Tree(familytree);


describe("Family Tree Finder", function () {
    describe("Brothers Finder", function () {
        it("recovers the brothers of family tree", function () {
            var person = tree.search("Ish");
            var brother = tree.brothers(person);
            var result = [];
            brother.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Chit','Vich']);
        });
        it("if a person don't have brothers of family tree", function () {
            var person = tree.search("Mnu");
            var brother = tree.brothers(person);
            expect(brother).to.deep.equal([]);
        });
    });
    describe("Sisters Finder", function () {
        it("recovers the sisters of family tree", function () {
            var person = tree.search("Vila");
            var sister = tree.sisters(person);
            var result = [];
            sister.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Chika']);
        });
        it("if a person don't have sisters of family tree", function () {
            var person = tree.search("Kriya");
            var sister = tree.sisters(person);
            expect(sister).to.deep.equal([]);
        });
    });
    describe("Children Finder", function () {
        it("recovers the children of family tree", function () {
            var person = tree.search("Satya");
            var children = tree.children(person);
            var result = [];
            children.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Satvy','Savya','Saayan']);
        });
        it("if a person don't have children of family tree", function () {
            var person = tree.search("Asva");
            var children = tree.children(person);
            expect(children).to.deep.equal([]);
        });
    });
    describe("Son Finder", function () {
        it("recovers the sons of family tree", function () {
            var person = tree.search("Satya");
            var son = tree.sons(person);
            var result = [];
            son.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Savya','Saayan']);
        });
        it("if a person don't have sons of family tree", function () {
            var person = tree.search("Mnu");
            var son = tree.sons(person);
            expect(son).to.deep.equal([]);
        });
    });
    describe("Daughters Finder", function () {
        it("recovers the daughters of family tree", function () {
            var person = tree.search("Satya");
            var children = tree.daughters(person);
            var result = [];
            children.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Satvy']);
        });
        it("if a person don't have daughters of family tree", function () {
            var person = tree.search("Asva");
            var children = tree.daughters(person);
            expect(children).to.deep.equal([]);
        });
    });
    
    describe("Grand Son Finder", function () {
        it("recovers the grand son of family tree", function () {
            var person = tree.search("Chit");
            var grandson = tree.grandson(person);
            var result = [];
            grandson.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Jata']);
        });
        it("if a person don't have grand son of family tree", function () {
            var person = tree.search("Ish");
            var grandson = tree.grandson(person);
            expect(grandson).to.deep.equal([]);
        });
    });
    describe("Grand Daughters Finder", function () {
        it("recovers the grand daughters of family tree", function () {
            var person = tree.search("Chit");
            var grandson = tree.granddaughter(person);
            var result = [];
            grandson.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Driya']);
        });
        it("if a person don't have grand daughters of family tree", function () {
            var person = tree.search("Kpila");
            var grandson = tree.grandson(person);
            expect(grandson).to.deep.equal([]);
        });
    });
    describe("Father Finder", function () {
        it("recovers the father of family tree", function () {
            var person = tree.search("Vrita");
            var father = tree.father(person);
            var result = [];
            expect(father.name).to.deep.equal('Chit');
        });
        it("if a person don't have father of family tree", function () {
            var person = tree.search("Gru");
            var father = tree.father(person);
            expect(father).to.deep.equal(undefined);
        });
    });
    describe("Mother Finder", function () {
        it("recovers the mother of family tree", function () {
            var person = tree.search("Chika");
            var mother = tree.mother(person);
            expect(mother.name).to.deep.equal('Lika');
        });
        it("if a person don't have mother of family tree", function () {
            var person = tree.search("Kpila");
            var mother = tree.mother(person);
            expect(mother).to.deep.equal(undefined);
        });
    });
    describe("Cousins Finder", function () {
        it("recovers the cousins of family tree", function () {
            var person = tree.search("Vila");
            var cousins = tree.cousins(person);
            var result = [];
            cousins.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Drita','Vrita','Satvy','Savya','Saayan']);
        });
        it("if a person don't have cousins of family tree", function () {
            var person = tree.search("Jaya");
            var cousins = tree.cousins(person);
            expect(cousins).to.deep.equal([]);
        });
    });
    describe("Brother-in-Law Finder", function () {
        it("recovers the brother-in-law of family tree", function () {
            var person = tree.search("Krpi");
            var brotherinlaw = tree.brotherinlaw(person);
            var result = [];
            brotherinlaw.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Saayan']);
        });
        it("if a person don't have brother-in-law of family tree", function () {
            var person = tree.search("Gru");
            var brotherinlaw = tree.brotherinlaw(person);
            expect(brotherinlaw).to.deep.equal([]);
        });
    });
    describe("Sister-in-Law Finder", function () {
        it("recovers the sister-in-law of family tree", function () {
            var person = tree.search("Satya");
            var sisterinlaw = tree.sisterinlaw(person);
            var result = [];
            sisterinlaw.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Ambi','Lika']);
        });
        it("if a person don't have sister-in-law of family tree", function () {
            var person = tree.search("Jaya");
            var sisterinlaw = tree.sisterinlaw(person);
            expect(sisterinlaw).to.deep.equal([]);
        });
    });
    describe("Paternal Uncle", function () {
        it("recovers the paternal uncle of family tree", function () {
            var person = tree.search("Misa");
            var paternaluncle = tree.paternaluncle(person);
            var result = [];
            paternaluncle.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Savya','Asva']);
        });
        it("if a person don't have paternal uncle of family tree", function () {
            var person = tree.search("Mnu");
            var paternaluncle = tree.paternaluncle(person);
            expect(paternaluncle).to.deep.equal([]);
        });
    });
    describe("Maternal Uncle", function () {
        it("recovers the maternal uncle of family tree", function () {
            var person = tree.search("Satvy");
            var maternaluncle = tree.maternaluncle(person);
            var result = [];
            maternaluncle.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Vich','Ish','Chit']);
        });
        it("if a person don't have maternal uncle of family tree", function () {
            var person = tree.search("Mnu");
            var maternaluncle = tree.maternaluncle(person);
            expect(maternaluncle).to.deep.equal([]);
        });
    });
    describe("Paternal Aunt", function () {
        it("recovers the paternal aunt of family tree", function () {
            var person = tree.search("Vrita");
            var paternalaunt = tree.paternalaunt(person);
            var result = [];
            paternalaunt.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Satya','Lika']);
        });
        it("if a person don't have paternal aunt of family tree", function () {
            var person = tree.search("Satvy");
            var paternalaunt = tree.paternalaunt(person);
            expect(paternalaunt).to.deep.equal([]);
        });
    });
    describe("Maternal Aunt", function () {
        it("recovers the maternal aunt of family tree", function () {
            var person = tree.search("Savya");
            var maternalaunt = tree.maternalaunt(person);
            var result = [];
            maternalaunt.forEach(function(e){
                result.push(e.name);
            });
            expect(result).to.have.members(['Ambi','Lika']);
        });
        it("if a person don't have maternal aunt of family tree", function () {
            var person = tree.search("Mnu");
            var maternalaunt = tree.maternalaunt(person);
            expect(maternalaunt).to.deep.equal([]);
        });
    });
});