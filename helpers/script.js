module.exports = `
CREATE (KING:Person {name:'King Shan', gender:'male'})
CREATE (QUEEN:Person {name:'Queen Anga', gender:'female'})
CREATE (ISH:Person {name:'Ish', gender:'male'})
CREATE (CHIT:Person {name:'Chit', gender:'male'})
CREATE (VICH:Person {name:'Vich', gender:'male'})
CREATE (SATYA:Person {name:'Satya', gender:'female'})
CREATE (AMBI:Person {name:'Ambi', gender:'female'})
CREATE (LIKA:Person {name:'Lika', gender:'female'})
CREATE (VYAN:Person {name:'Vyan', gender:'male'})
CREATE (DRITA:Person {name:'Drita', gender:'male'})
CREATE (JAYA:Person {name:'Jaya', gender:'female'})
CREATE (VRITA:Person {name:'Vrita', gender:'male'})
CREATE (JATA:Person {name:'Jata', gender:'male'})
CREATE (DRIYA:Person {name:'Driya', gender:'female'})
CREATE (MNU:Person {name:'Mnu', gender:'male'})
CREATE (VILA:Person {name:'Vila', gender:'male'})
CREATE (JNKI:Person {name:'Jnki', gender:'female'})
CREATE (LAVNYA:Person {name:'Lavnya', gender:'female'})
CREATE (GRU:Person {name:'Gru', gender:'male'})
CREATE (CHIKA:Person {name:'Chika', gender:'female'})
CREATE (KPILA:Person {name:'Kpila', gender:'male'})
CREATE (SATVY:Person {name:'Satvy', gender:'female'})
CREATE (ASVA:Person {name:'Asva', gender:'male'})
CREATE (SAVYA:Person {name:'Savya', gender:'male'})
CREATE (KRPI:Person {name:'Krpi', gender:'female'})
CREATE (KRIYA:Person {name:'Kriya', gender:'male'})
CREATE (SAAYAN:Person {name:'Saayan', gender:'male'})
CREATE (MINA:Person {name:'Mina', gender:'female'})
CREATE (MISA:Person {name:'Misa', gender:'male'})

CREATE 
    (KING)-[:ISMAN_OF]->(QUEEN),
    (KING)-[:ISWOMAN_OF]->(QUEEN),
    (ISH)-[:ISSON_OF]->(KING),
    (CHIT)-[:ISSON_OF]->(KING),
    (VICH)-[:ISSON_OF]->(KING),
    (SATYA)-[:ISSON_OF]->(KING),
    (ISH)-[:ISSON_OF]->(QUEEN),
    (CHIT)-[:ISSON_OF]->(QUEEN),
    (VICH)-[:ISSON_OF]->(QUEEN),
    (SATYA)-[:ISSON_OF]->(QUEEN),
    (CHIT)-[:ISMAN_OF]->(AMBI),
    (AMBI)-[:ISWOMAN_OF]->(CHIT),
    (DRITA)-[:ISSON_OF]->(CHIT),
    (VRITA)-[:ISSON_OF]->(CHIT),
    (DRITA)-[:ISSON_OF]->(AMBI),
    (VRITA)-[:ISSON_OF]->(AMBI),
    (DRITA)-[:ISMAN_OF]->(JAYA),
    (JAYA)-[:ISWOMAN_OF]->(DRITA),
    (JATA)-[:ISSON_OF]->(DRITA),
    (DRIYA)-[:ISSON_OF]->(DRITA),
    (JATA)-[:ISSON_OF]->(JAYA),
    (DRIYA)-[:ISSON_OF]->(JAYA),
    (MNU)-[:ISMAN_OF]->(DRIYA),
    (DRIYA)-[:ISWOMAN_OF]->(MNU),
    (VICH)-[:ISMAN_OF]->(LIKA),
    (LIKA)-[:ISWOMAN_OF]->(VICH),
    (VILA)-[:ISSON_OF]->(VICH),
    (CHIKA)-[:ISSON_OF]->(VICH),
    (VILA)-[:ISSON_OF]->(LIKA),
    (CHIKA)-[:ISSON_OF]->(LIKA),
    (VILA)-[:ISMAN_OF]->(JNKI),
    (JNKI)-[:ISWOMAN_OF]->(VILA),
    (LAVNYA)-[:ISSON_OF]->(VILA),
    (LAVNYA)-[:ISSON_OF]->(JNKI),
    (GRU)-[:ISMAN_OF]->(LAVNYA),
    (LAVNYA)-[:ISWOMAN_OF]->(GRU),
    (KPILA)-[:ISMAN_OF]->(CHIKA),
    (CHIKA)-[:ISWOMAN_OF]->(KPILA),
    (VYAN)-[:ISMAN_OF]->(SATYA),
    (SATYA)-[:ISWOMAN_OF]->(VYAN),
    (SATVY)-[:ISSON_OF]->(SATYA),
    (SAVYA)-[:ISSON_OF]->(SATYA),
    (SAAYAN)-[:ISSON_OF]->(SATYA),
    (SATVY)-[:ISSON_OF]->(VYAN),
    (SAVYA)-[:ISSON_OF]->(VYAN),
    (SAAYAN)-[:ISSON_OF]->(VYAN),
    (ASVA)-[:ISMAN_OF]->(SATVY),
    (SATVY)-[:ISWOMAN_OF]->(ASVA),
    (SAVYA)-[:ISMAN_OF]->(KRPI),
    (KRPI)-[:ISWOMAN_OF]->(SAVYA),
    (KRIYA)-[:ISSON_OF]->(SAVYA),
    (KRIYA)-[:ISSON_OF]->(KRPI),
    (SAAYAN)-[:ISMAN_OF]->(MINA),
    (MINA)-[:ISWOMAN_OF]->(SAAYAN),
    (MISA)-[:ISSON_OF]->(SAAYAN),
    (MISA)-[:ISSON_OF]->(MINA)
`

