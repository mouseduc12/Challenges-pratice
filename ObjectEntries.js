const newHero = {a: 'b', b: 2, c: '4'}
const heroArray = [];
Object.entries(newHero).forEach(each => heroArray.push(...each))
console.log(heroArray)

const allHero =  {x: 'Geo', y: 'Mons', z: 'North'}
const xHero = Object.entries(allHero)[0]
console.log(xHero)
