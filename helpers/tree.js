module.exports = class Tree {
    constructor(king) {
        this.king = king;
    }
    search(name, personToTest) {
        //Se personToTest não for informado ele pega o king
        let person = personToTest || this.king;
        //Testa se a person atual tem o nome desejado
        if (person.name === name) {
            return person;
            //Testa se a pessoa é homem, se for testa se tem esposa, se tiver, verifica se a esposa é a pessoa procurada
        } else if (person.gender === "male" && person.ismanof !== undefined && person.ismanof.name === name) {
            return person.ismanof;
        } else if (person.gender === "female" && person.iswomanof !== undefined && person.iswomanof.name === name) {
            return person.iswomanof;
        } else {
            //Itera sobre os filhos e chama a função de procura de forma recursiva em cada filho
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
    brothers(person) {

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
    sisters(person) {
        var father = person.father;
        var sons = [];
        if (father != undefined) {
            sons = father.sons;
        }
        const sister = [];
        sons.forEach(function (son) {
            if (son.name != person.name && son.gender === 'female') {
                sister.push(son);
            }
        }, this);

        return sister;
    }
    children(person) {
        return person.sons;
    }
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
    father(person) {
        return person.father;
    }
    mother(person) {
        return person.mother;
    }
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
    paternaluncle(person) {
        var father = person.father;
        if(father === undefined){
            return;  
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
    maternaluncle(person) {
        var mother = person.mother;
        if(mother === undefined){
            return;  
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
    paternalaunt(person) {
        var father = person.father;
        if(father === undefined){
            return;  
        }
        var aunts = this.sisters(father);
        var sisterlaw = this.sisterinlaw(father);
        if (sisterlaw.length > 0) {
            sisterlaw.forEach(function (sister) {
                aunts.push(brother);
            }, this);
        }
        return aunts;
    }
    maternalaunt(person) {
        var mother = person.mother;
        if(mother === undefined){
            return;  
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
    cousins(person) {
        var father = person.father;
        var uncles = this.brothers(father);
        var aunt = this.sisters(father);
        uncles = uncles.concat(aunt);
        var siblings = [];
        uncles.forEach(function (sib) {
            siblings = siblings.concat(sib.sons);
        }, this);
        return siblings;
    }
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