import "./style.scss";

document.addEventListener("DOMContentLoaded", ()=>{ 
    console.log("DOM fully loaded and parsed!")


    let temp = 0;
    let result  = 0;

    document.querySelector("#result").innerHTML = result;


    document.querySelector("#one").addEventListener("click", ()=>{
      temp = 1;
    })


    document.querySelector("#two").addEventListener("click", ()=>{
      temp = 2;
    })




 document.querySelector("#plus").addEventListener("click", ()=>{
  result = result + temp;
  document.querySelector("#result").innerHTML = result;
 
 })

 document.querySelector("#minus").addEventListener("click", ()=>{
  result = result - temp;
  document.querySelector("#result").innerHTML = result;
 
 })


 document.querySelector("#delete").addEventListener("click", ()=>{
  temp = 0;
  result = 0;
  document.querySelector("#result").innerHTML = result;
 })


})
