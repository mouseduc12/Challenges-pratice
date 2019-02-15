const carrots = ["ripe", "sweet", "fabulous"]

const returnCarrot = (arr) => arr.map(each => {return {type: "carrots", quality: each}})


returnCarrot(carrots)
