const Person = require('../models/person');



const king = new Person({
    name: 'King Shan',
    gender: 'male',
});
const queen = new Person({
    name: 'Quen Anga',
    gender: 'female',
});

const ish = new Person({
    name: 'Ish',
    gender:'male',
});
const chit = new Person({
    name: 'Chit',
    gender:'male',
});
const vich = new Person({
    name: 'Vich',
    gender:'male',
});
const satya = new Person({
    name: 'Satya',
    gender:'female',
});
const ambi = new Person({
    name: 'Ambi',
    gender:'female',
});
const lika = new Person({
    name: 'Lika',
    gender:'female',
});
const vyan = new Person({
    name: 'Vyan',
    gender:'male',
});
const drita = new Person({
    name: 'Drita',
    gender:'male',
});
const jaya = new Person({
    name: 'Jaya',
    gender:'female',
});
const vrita = new Person({
    name: 'Vrita',
    gender:'male',
});
const jata = new Person({
    name: 'Jata',
    gender:'male',
});
const driya = new Person({
    name: 'Driya',
    gender:'female',
});
const mnu = new Person({
    name: 'Mnu',
    gender:'male',
});
const vila = new Person({
    name: 'Vila',
    gender:'male',
});
const jnki = new Person({
    name: 'Jnki',
    gender:'female',
});
const lavnya = new Person({
    name: 'Lavnya',
    gender:'female',
});
const gru = new Person({
    name: 'Gru',
    gender:'male',
});
const chika = new Person({
    name: 'Chika',
    gender:'female',
});
const kpila = new Person({
    name: 'Kpila',
    gender:'male',
});
const satvy = new Person({
    name: 'Satvy',
    gender:'female',
});
const asva = new Person({
    name: 'Asva',
    gender:'male',
});
const savya = new Person({
    name: 'Savya',
    gender:'male',
});
const krpi = new Person({
    name: 'Krpi',
    gender:'female',
});
const kriya = new Person({
    name: 'Kriya',
    gender:'male',
});
const saayan = new Person({
    name: 'Saayan',
    gender:'male',
});
const mina = new Person({
    name: 'Mina',
    gender:'female',    
});
const misa = new Person({
    name: 'Misa',
    gender:'male',
});


king.ismanof = queen;
king.sons.push(ish);
king.sons.push(chit);
king.sons.push(vich);
king.sons.push(satya);
queen.iswomanof = king;
queen.sons.push(ish);
queen.sons.push(chit);
queen.sons.push(vich);
queen.sons.push(satya);
ish.father = king;
ish.mother = queen;
chit.father = king;
chit.mother = queen;
chit.ismanof = ambi;
chit.sons.push(drita);
chit.sons.push(vrita);
ambi.iswomanof = chit;
ambi.sons.push(drita);
ambi.sons.push(vrita);
drita.father = chit;
drita.mother = ambi;
drita.ismanof = jaya;
drita.sons.push(jata);
drita.sons.push(driya);
jaya.iswomanof = drita;
jaya.sons.push(jata);
jaya.sons.push(driya);
vrita.father = chit;
vrita.mother = ambi;
jata.father = drita;
jata.mother = jaya;
driya.father = drita;
driya.mother = jaya;
driya.iswomanof = mnu;
mnu.ismanof = driya;
vich.father = king;
vich.mother = queen;
vich.ismanof = lika;
vich.sons.push(vila);
vich.sons.push(chika);
lika.iswomanof = vich;
lika.sons.push(vila);
lika.sons.push(chika);
vila.father = vich;
vila.mother = lika;
vila.ismanof = jnki;
vila.sons.push(lavnya);
jnki.iswomanof = vila;
jnki.sons.push(lavnya);
lavnya.father = vila;
lavnya.mother = jnki;
lavnya.iswomanof = gru;
gru.ismanof = lavnya;
chika.father = vich;
chika.mother = lika;
chika.iswomanof = kpila;
kpila.ismanof = chika;
satya.father = king;
satya.mother = queen;
satya.iswomanof = vyan;
satya.sons.push(satvy);
satya.sons.push(savya);
satya.sons.push(saayan);
vyan.ismanof= satya;
vyan.sons.push(satvy);
vyan.sons.push(savya);
vyan.sons.push(saayan);
satvy.father = vyan;
satvy.mother=satya;
satvy.iswomanof=asva;
asva.ismanof=satvy;
savya.mother = satya;
savya.father = vyan;
savya.ismanof = krpi;
savya.sons.push(kriya);
krpi.iswomanof = savya;
krpi.sons.push(kriya);
saayan.father = vyan;
saayan.mother = satya;
saayan.ismanof = mina;
saayan.sons.push(misa);
mina.iswomanof = saayan;
mina.sons.push(misa);


module.exports = king;