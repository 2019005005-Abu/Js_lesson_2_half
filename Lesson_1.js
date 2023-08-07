///IIFE-Immidiately Invoked Function Expression

//normal function
let normalfunction=function(){
    console.log("This is a Normal function");
}
normalfunction();

//IIFE function
var controller=(function IIFI_Function(){
   console.log("This is a IIFE function")
   var a ={
    name:'Abu Abu Al Shahriar Rifat',
    profession:'Software Enginner',
    System_Id:2019005005
   }
   return a ;
})();
   
var AllInfo=(function MyName(){
    return `My Name is ${controller.name} and I am
      ${controller.profession} by profession`
})()

console.log(AllInfo);

// (function myBio(){
//     console.log("I am  working as  a software Enginner")
// })()       

//Accidental global Variable 
function unName(){
    this.name=`Rifat`;
}
unName();
console.log(name);

let myCustomeObject={
    name:"Abu Al Shahriar Rifat",
    age:21,
    job:"Software Enginnering",
    message:function(){
        console.log(this);
    }
}
console.log(myCustomeObject.message());

//first-example
var myCustomeObject1={
    name:"Abu Al Shahriar Rifat",
    age:21,
    job:"Software Enginnering",
    anotherObject:{
        name:"Shahriar Rifat",
        msg:function(){
            console.log(this.name);
        }
    }
}
console.log(myCustomeObject1.anotherObject.msg());

//second-example
let secondExample1={
    name:"Abu Al Rifat",
    profession:"Software Developer",
    secondExample2:{
        profession:"Full Stack web application developer",
        message:function(){
            console.log(`I am ${this.profession} by profession`);
        }
    }
}

console.log(secondExample1.secondExample2.message());



let ClearRules_1={
    name:"Kifayat Shahnwaez",
    profession:"Nursing Officer",
    ClearRules_2:{
        country_name:"Bangladesh",
        nationality:"Bangladeshi",
        message:function(){
            console.log(this);
        }
    }
}

console.log(ClearRules_1.ClearRules_2.message());

//using call ()
let UsingCall=ClearRules_1.ClearRules_2.message.call(ClearRules_1);
console.log(UsingCall);

