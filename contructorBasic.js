var Person = function(name, isAlive, hair){
  this.name = name;
  this.isAlive = isAlive;
  this.hair = hair;
  this.speak = function(){
    console.log(`Hello Mr, ${this.name}`)
  }
}
var sss = new Person("sss","hell ya", "brown");
sss.speak();
