 let myCustomeObject1={
    name:"Abu Al Shahriar Rifat",
    age:21,
    job:"Student",
    anotherObject:{
        name:"Shahriar",
        value:function(){
            console.log("My Name is "+this.name);
        }
    }
 }

 const c=myCustomeObject1.anotherObject.value();
 console.log(c);
 const UsingCall1=myCustomeObject1.anotherObject.value.call(myCustomeObject1);
 console.log(UsingCall1);

 var myCustomizing_1={
    name:"Abu Al Shahriar Rifat",
    age:21,
    job:"Software Enginnering",
    anotherObject:{
        name:"Shahriar",
        value:function(){
            console.log("My Name is "+this.name);
        }.call(myCustomizing_1),
        value1:function(name){
            console.log("My Name is",this.name)
        }
    }
 }

 let karim={
    name:"Abu Al Shahriar Rifat",
    age:1998,
    myAge:function(currentYear){
        console.log(`My Name is ${this.name} and I am ${currentYear-this.age}`);
    }
 }
 let myAgeIs=karim.myAge(2023);
 console.log(myAgeIs);

 //another System Using Call method
 var rahim={
    name:`Abu Al Shahriar Rifat`,
    age:1996
 }

let RahimAge=karim.myAge.call(rahim,2023);
console.log(RahimAge)


//Using Apply
let applyingMethodObj={
    name:"Shahriar Rifat",
    age:25,
    job:"Software Enginnering",
    anotherObject:{
        name:"Abu Al Shahriar Rifat",
        value:function(){
            console.log("My name is "+this.name) ;
        }
    }
}
let applyMethod1=applyingMethodObj.anotherObject.value.apply(applyingMethodObj);
console.log(applyMethod1);


let karim1={
    name:"Karim Rahman",
    dob:1995,
    age:function(currentYear,message="Hello"){
      console.log(`His Name is ${this.name} and he is ${currentYear-this.dob} yaers old  and ${message}`);
    }
}

let NormalCalling=karim1.age(2023,"thank you");
console.log(NormalCalling);

var ApplyRahim={
    name:"Abu Al Shahriar Rifat",
    dob:1997

}
let CallingRahim=karim1.age.apply(ApplyRahim,[2023,"Congratulations"]);
console.log(CallingRahim);

var UsingBind=applyingMethodObj.anotherObject.value.bind(applyingMethodObj);
console.log(UsingBind());

let BindingUsing=karim1.age.bind(ApplyRahim,2023);
BindingUsing("I am a Full stack  developer");



// let state={
//     value:0
// }

// //actions asre
// let INCREMENT='increment'
// let DECREMENT='decrement'
// //actions
// let increment=()=>{
//   return{
//     ...state,
//     value:state.value+1
//   }
// }
// //actions
// let decrement=()=>{
//    return{
//     ...state,
//     value:state-1
//    }
// }
// let counterReducer=(state=initialsate,action)=>{
//     switch(action.type){
//       case INCREMENT:

//     }
// }

// //crear store
// // subscribe
// //dispatch

