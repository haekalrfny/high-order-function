let personel = [
    {
        id: 5,
        name: 'Luke Skywalker',
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: 'Sabine Wren',
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: 'Zeb Orellios',
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: 'Ezra Bridger',
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: 'Caleb Dume',
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    }
]

const isForceUserTrue = personel.filter((a) => a.isForceUser === true)
const isForceUserFalse = personel.filter((a) => a.isForceUser === false)

const jumlahIsForceUserTrue = isForceUserTrue.map((a) => a.pilotingScore + a.shootingScore)
console.log(jumlahIsForceUserTrue); 

const jumlahIsForceUserFalse = isForceUserFalse.map((a) => a.pilotingScore + a.shootingScore)
console.log(jumlahIsForceUserFalse);

const totalTrue = jumlahIsForceUserTrue.reduce((a, b) => a + b)
console.log(totalTrue);

const totalFalse = jumlahIsForceUserFalse.reduce((a, b) => a + b)
console.log(totalFalse);

personel.forEach((p) => {
    document.write(`Id : ${p.id} <br> Name : ${p.name} <br> Piloting score : ${p.pilotingScore} <br> Shooting score : ${p.shootingScore} <br> Is force user : ${p.isForceUser} <br>`);
    if (p.isForceUser === true) {
        const totalScore = p.pilotingScore + p.shootingScore
        document.write(`total : ${totalScore}`)
    } 
    document.write(`<hr>`)
})

document.write(`total (true) : ` + totalTrue)
document.write(`<br>`)
document.write(`total (false) :` + totalFalse)
document.write(`<br>`)
document.write(`total (true + false) : ` + (totalTrue + totalFalse))