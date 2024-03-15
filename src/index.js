import "./style.scss";

document.addEventListener("DOMContentLoaded", ()=>{ 
    console.log("DOM fully loaded and parsed!")

    let result = 0;
    let tab = [];

    document.querySelector("#result").innerHTML = result;


document.querySelector("#plus").addEventListener("click", ()=>{
  let x = parseFloat(document.querySelector("#number").value);
  
  tab.push(x)

  let sum = tab.reduce((accu, value) => accu + value); 
  document.querySelector("#result").innerHTML = sum;
  console.log(tab)

 })




 document.querySelector("#minus").addEventListener("click", ()=>{
  let x = parseFloat(document.querySelector("#number").value);
  
  tab.push(x)

  let sum = tab.reduce((accu, value) => accu - value); 
  document.querySelector("#result").innerHTML = sum;

  console.log(tab)


 })








 document.querySelector("#multiply").addEventListener("click", ()=>{
  let x = parseFloat(document.querySelector("#number").value);
  
  tab.push(x)
  
  let sum = tab.reduce((accu, value) => accu * value); 
  document.querySelector("#result").innerHTML = sum;
  

  console.log(tab)
 })



 document.querySelector("#divide").addEventListener("click", ()=>{
  let x = parseFloat(document.querySelector("#number").value);
  
  tab.push(x)


  let sum = tab.reduce((accu, value) => accu / value); 
  document.querySelector("#result").innerHTML = sum;
  console.log(tab)
 })









 document.querySelector("#delete").addEventListener("click", ()=>{
    tab.splice(0)
 })


})
