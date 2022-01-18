const  app = Vue.createApp({
data() {
  return {
     sum:"",
    operators: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "*",
      "/",
      "+"
    ]
  }
},
methods: {
  addToSum(operators){
    this.sum += operators;
  },

  evalSum(){
    this.sum = eval(this.sum);

  },

  clearSum(){
    this.sum="";
  }
},

})
app.mount("#app");



// let sum="";

// function addToSum(operator) {
//    sum= sum + operator;
//    console.log(sum);
//    document.getElementById("output").innerText =sum;
// }

// function evaluateSum() {
//     sum = eval(sum);
//     document.getElementById("output").innerText =sum;
// }
//  function clearSum() {
//    sum="";  
//  document.getElementById("output").innerText =sum;

// }

// function deleteChar() {
//     sum = sum.slice(0 , -1);
//     document.getElementById("output").innerText =sum;
//  }