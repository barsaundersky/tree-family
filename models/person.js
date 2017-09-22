module.exports = class Person{
    constructor(person){
      this.name = person.name;
      this.gender = person.gender;
      this.father = person.father;
      this.mother = person.mother;
      this.sons = person.sons || [];
      this.iswomanof = person.iswomanof;
      this.ismanof = person.ismanof;  
    }
    
}