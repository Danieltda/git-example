//for loop 

for(var temp = 5; temp <= 51; temp +=5){
    console.log(temp)
}

// while loop

let tempre = 5

while (tempre <=51){
    console.log(tempre)
    tempre +=5
}


let count = 5
while (true) { 
    console.log(count)
    if (count >=50 ) { //higher than 50 we want to stop
  break //stop 
  }
  count += 5
}               

//const language = 'spanish
// add to array fruits.push (language)

// for loop on a array
var fruits = ['apples','oranges','pears','apricots']
for (var index = 0; index < fruits.length; index ++){
    console.log('I Love ' + ':' + fruits[index]);
}

//functions

function printMessage(a,b) {
return a*b
}
document.write( printMessage(3,4) );


//function describes what to do with each string of the array
var snacks = ['0: cut and bake vegetables in a frying pan', '1: stir 6 eggs and 100 gram of ricotta', '2: add ricotta to the baked vegetables', '3: after 5 minutes, turn frittata, sprinkle parmaggiano over it', '4: bake frittata, under a cover, and in the oven for 8 minutes']
snacks.forEach(function(element) {
    console.log(element);
  });

 /*function expression that we will use a lot (arrow function)
const myFunction = (parameters,hello,anotherOne)=>{
     console.log(parameters);
  } */

  var person = {
   first_name : 'Rembert',
   last_name: 'Boom',
   speak: function() {
       console.log('Hello I am ' +  person.first_name + ' ' + person.last_name)
}};

person.speak();

var age = 25
var student = {
    first_name: 'Daniel',
    my_age: 25,
    printAgeinMonths: function(){
        return 12 * this.my_age
    },
    printAgeinDays: function(){
        return 30 * printAgeinMonths
    },
    talk: function (){
        console.log(`I am ${student.first_name} and I am ${student.my_age} years, or ${age} months old`)
    }
};

console.log(student.printAgeinDays());
console.log(student.printAgeinMonths());
student.talk();



