//Class of methods to search in the Family Tree
module.exports = class Tree {
    constructor(king) {
        this.king = king;
    }
    //When user put a name, this method returns the person
    search(name, personToTest) {
        let person = personToTest || this.king;
        if (person.name === name) {
            return person;
        } else if (person.gender === "male" && person.ismanof !== undefined && person.ismanof.name === name) {
            return person.ismanof;
        } else if (person.gender === "female" && person.iswomanof !== undefined && person.iswomanof.name === name) {
            return person.iswomanof;
        } else {
            let resultado = undefined;
            person.sons.find((son) => {
                let result = this.search(name, son)
                if (result !== undefined) {
                    resultado = result;
                    return true;
                }
                return false;
            })
            return resultado;
        }
    }
    //Recover all names of family tree
    findAllNames(personparam) {
        let names = [];
        const person = personparam || this.king;  
        names.push(person.name);     
        if (person.ismanof !== undefined) {
          names.push(person.ismanof.name);
        } else if (person.iswomanof !== undefined) {
          names.push(person.iswomanof.name);
        }       
       let resultado = undefined;
        person.sons.forEach(son => {
          names= names.concat(this.findAllNames(son))
        },this);
        return names;
      }
    //Match brothers of the person
    brothers(person) {
        if(person !== undefined){
            var father = person.father;
            if (father === undefined) {
                return [];
            }
            var sons = father.sons;
            const brother = [];
            sons.forEach(function (son) {
                if (son.name != person.name && son.gender === 'male') {
                    brother.push(son);
                }
            }, this);
            return brother;
        }
        else{
            return [];
        }
        
    }
    //Match sisters of the person
    sisters(person) {
        var father = person.father;
        var sons = [];
        if (father != undefined) {
            sons = father.sons;
        }
        else {
            return [];
        }
        const sister = [];
        sons.forEach(function (son) {
            if (son.name != person.name && son.gender === 'female') {
                sister.push(son);
            }
        }, this);

        return sister;
    }
    //Match children of the person
    children(person) {
        return person.sons;
    }
    //Match sons of the person
    sons(person) {
        var children = person.sons;
        const son = [];
        children.forEach(function (kid) {
            if (kid.gender === 'male') {
                son.push(kid);
            }
        }, this);

        return son;
    }
    //Match daughters of the person
    daughters(person) {
        var children = person.sons;
        const daughter = [];
        children.forEach(function (kid) {
            if (kid.gender === 'female') {
                daughter.push(kid);
            }
        }, this);

        return daughter;
    }
    //Match father of the person
    father(person) {
        return person.father;
    }
    //Match mother of the person
    mother(person) {
        return person.mother;
    }
    //Match brotherinlaw of the person
    brotherinlaw(person) {
        if (person.gender === 'male') {
            var spouse = person.ismanof;
            var brother = this.brothers(spouse);
            var sisters = this.sisters(person);
            if (sisters.length > 0) {
                sisters.forEach(function (sis) {
                    if (sis.iswomanof !== undefined) {
                        brother.push(sis.iswomanof);
                    }
                }, this);
            }
            return brother;
        } else {
            var spouse = person.iswomanof;
            var brother = this.brothers(spouse);
            var sisters = this.sisters(person);
            if(sisters.length > 0){
                sisters.forEach(function (sis) {
                    if (sis.iswomanof !== undefined) {
                        brother.push(sis.iswomanof);
                    }
                }, this);
            }
            return brother;
        }

    }
    //Match sisterinlaw of the person
    sisterinlaw(person) {
        if (person.gender === 'male') {
            var spouse = person.ismanof;
            var sister = this.sisters(spouse);
            var brother = this.brothers(person);
            if(brother.length > 0){
                brother.forEach(function(bro){
                    if(bro.ismanof !== undefined){
                        sister.push(bro.ismanof);
                    }
                },this);
            }
            return sister;
        } else {
            var spouse = person.iswomanof;
            var sister = this.sisters(spouse);
            var brother = this.brothers(person);
            if(brother.length > 0){
                brother.forEach(function (bro) {
                    if (bro.ismanof !== undefined) {
                        sister.push(bro.ismanof);
                    }
                }, this);
            }
            return sister;
        }

    }
    //Match paternal uncle of the person
    paternaluncle(person) {
        var father = person.father;
        if(father === undefined){
            return [];  
        }
        var uncles = this.brothers(father);
        var brotherlaw = this.brotherinlaw(father);
        if (brotherlaw.length > 0) {
            brotherlaw.forEach(function (brother) {
                uncles.push(brother);
            }, this);
        }
        return uncles;
    }
    //Match Maternal Uncle of the person
    maternaluncle(person) {
        var mother = person.mother;
        if(mother === undefined){
            return [];  
        }
        var uncles = this.brothers(mother);
        var brotherlaw = this.brotherinlaw(mother);
        if (brotherlaw.length > 0) {
            brotherlaw.forEach(function (brother) {
                uncles.push(brother);
            }, this);
        }
        return uncles;
    }
    //Match Paternal Aunt of the person
    paternalaunt(person) {
        var father = person.father;
        if(father === undefined){
            return [];  
        }
        var aunts = this.sisters(father);
        var sisterlaw = this.sisterinlaw(father);
        if (sisterlaw.length > 0) {
            sisterlaw.forEach(function (sister) {
                aunts.push(sister);
            }, this);
        }
        return aunts;
    }
    //Match Maternal Aunt of the person
    maternalaunt(person) {
        var mother = person.mother;
        if(mother === undefined){
            return [];  
        }
        var aunts = this.sisters(mother);
        var sisterlaw = this.sisterinlaw(mother);
        if (sisterlaw.length > 0) {
            sisterlaw.forEach(function (sister) {
                aunts.push(sister);
            }, this);
        }
        return aunts;
    }
    //Match Cousins of the person
    cousins(person) {
        var father = person.father;
        if(father === undefined){
            return [];
        }
        var uncles = this.brothers(father);
        var aunt = this.sisters(father);
        uncles = uncles.concat(aunt);
        var siblings = [];
        uncles.forEach(function (sib) {
            siblings = siblings.concat(sib.sons);
        }, this);
        return siblings;
    }
    //Match Grand Daugther of the person
    granddaughter(person) {
        var children = person.sons;
        var daughters = [];
        var grand = [];
        children.forEach(function (son) {
            var dau = son.sons;
            dau.forEach(function (da) {
                if (da.gender === 'female') {
                    grand.push(da);
                }
            }, this);
        }, this);
        return grand;
    }
    //Match Grand Son of the person
    grandson(person) {
        var children = person.sons;
        var sons = [];
        var grand = [];
        children.forEach(function (son) {
            var so = son.sons;
            so.forEach(function (kid) {
                if (kid.gender === 'male') {
                    grand.push(kid);
                }

            }, this);

        }, this);
        return grand;
    }


}