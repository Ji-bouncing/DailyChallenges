

class Animal{
  constructor(name){
  this.name = name
  }
  speak(){
    console.log(`${this.name} makes a sound`)
  }
}
class Dog extends Animal{
  constructor(name,breed){
    super(name)
    this.breed = breed
  }
  
}
let simba = new Dog('simba','white')
console.log(simba)

class Human{
  constructor(name,origin){
    this._name = name
    
    this.origin = origin
  }
  
    get name(){
      return this._name
    }
  speak(){
    console.log(`${this.name} talks`)
  }
}
class Asium extends Human{
  constructor(name,origin){
  super(name)
  this.origin = origin
}
}
let mimi = new Asium('Mimi','Oyo')
console.log(mimi.name)

class Footballer{
  constructor(name,height,origin){
    this._name = name
    this._height = height
    this._origin = origin
    
  }
  get name(){
    return this._name
  }
  get height(){
    return this._height
  }
  get origin(){
    return this._origin
  }
  speak(){
    console.log(`${this.name} speaks and has ${this.height} height`)
  }
  
}
class Ronaldo extends Footballer{
  constructor(name,height, origin){
    super(name)
    this._height = height
    this._origin = origin
  } 
  get height(){
    return this._height
  }
  get origin(){
    return this._origin
  }
}
let Messi = new Ronaldo('Messi',23.7,'Brazil')
console.log(Messi)

class Animals{
  constructor(name,breed){
    this._name = name
    this._breed = breed
  }
  get name(){
    return this._name
  }
  get breed(){
    return this._breed
  }
  speak(){
    console.log(`${this._name} makes a sound`)
  }
}
class Dogs extends Animals{
  constructor(name,breed){
    super(name)
    this._breed = breed
  }
  get breed(){
    return this._breed
  }
  speak(){
    console.log(`${this._name} barks`)
  }
}
class Cats extends Animals{
  constructor(name,breed){
    super(name)
    this._breed = breed
  }
  get breed(){
    return this._breed
  }
  speak(){
    console.log(`${this._name} meow`)
  }
}
let Simba = new Dogs('Simab','German Shepherd')
let Curry = new Cats('Curry','White Roul')
console.log(Simba)
console.log(Curry)

let farm = [Simba,Curry]
for(a of farm){
  a.speak()
}


class Developers{
  constructor(name, role){
    this._name = name
    this._role = role
  }
  get name(){
    return this._name
  }
  get role(){
    return this._role
  }
  company(){
    console.log(`${this._name} works as a ${this._role} at a company`)
  }
}
class Frontend extends Developers {
  constructor(name, role){
    super(name)
    super.company()
    this._role = role
  }
  get role(){
    return this._role
  }
}

class Backend extends Developers {
  constructor(name, role){
    super(name)
    this._role = role
  }
  get role(){
    return this._role
  }
  company(){
    console.log(`${this._name} is a backend developer`)
  }
}
let Muhammad = new Frontend('Muhammad','Frontend')
let Abdullah= new Backend('Abdullah','Backend')
console.log(Muhammad)
console.log(Abdullah)
let Industry = [ Frontend, Backend]
for(a of Industry){
  a._role
}

class UniversityOFIbadan{
  constructor(name,level){
    this._name = name
    this._level = level
  }
  get name(){
    return this._name
  }
  get level(){
    return this._level
  }
  sayHello(){
    console.log(`Hello,my name is ${this._name} and i am a ${this._level} student.`)
  }
}
class Fresher extends UniversityOFIbadan{
  constructor(name,level){
    super(name)
    this._level = level
  }
  get level(){
    return this._level
  }
  sayGoodbye(){
    console.log(`Its good meeting you,See you later!`)
  }
}
class Staylite extends UniversityOFIbadan{
  constructor(name,level){
    super(name,level)
  }
  sayGoodbye(){
    console.log(`See you later dude!`)
  }
}

let Ismail = new Fresher('Ismail','100')
let Rasaq = new Staylite('Rasaq','300')
console.log(Ismail)
console.log(Rasaq)
let Students = [Ismail, Rasaq]

for(person of Students){
  person.sayHello()
}