let studentRecords = [
  { name: "John", id: 123, marks: 98 },
  { name: "Baba", id: 101, marks: 23 },
  { name: "yaga", id: 200, marks: 45 },
  { name: "Wick", id: 115, marks: 75 },
];
//Q1.
function output1(){
studentRecords.map((item) => {
  console.log(item.name.toUpperCase());
});
}
//Q2.
function output2(){
studentRecords.map((item) => {
  if (item.marks > 50) {
    console.log(item);
  }
});
}
////or
// let result = studentRecords.filter((item) => {
//   return item.marks > 50;
// });
// console.log(result);
//Q3
function output3(){
let result2 = studentRecords.filter((item) => {
  return item.marks > 50 && item.id > 120;
});
console.log(result2);
}
//Q4
function output4(){
  var sum=0;
  studentRecords.map((item)=>{
      sum+=item.marks;
      console.log(item.marks);
    
  });
  console.log(sum);
}
// //Q5.
function output5(){
studentRecords.map((item) => {
  if (item.marks > 50) {
    console.log(item.name);
  }
});
}
//Q6.
var sum=0;
function output6(){
  studentRecords.map((item)=>{
    if(item.id >120){
      sum+=item.marks;
    }
  });
  console.log(sum);
}
//Q7.
var total=0;
function output7(){
   studentRecords.map((item)=>{
    if(item.marks <50){
      item.marks+=15;
    }
    if(item.marks >50)
    {
      total+=item.marks;
    }
  });
  console.log(total);
}
//Q8.
function output8(){
let students = [
  { name: "Rachel", class: 6, rollno: 98 },
  { name: "Joey", class: 4, rollno: 23 },
  { name: "Chandler", class: 8, rollno: 45 },
  { name: "Ross", class: 2, rollno: 75 },
  { name: "Phoebe", class: 6, rollno: 24 },
  { name: "Monice", class: 8, rollno: 11 },
];
console.log(students);
}