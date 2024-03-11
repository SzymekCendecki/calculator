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

    document.querySelector("#three").addEventListener("click", ()=>{
      temp = 3;
    })

    document.querySelector("#four").addEventListener("click", ()=>{
      temp = 4;
    })

    document.querySelector("#five").addEventListener("click", ()=>{
      temp = 5;
    })

    document.querySelector("#six").addEventListener("click", ()=>{
      temp = 6;
    })

    document.querySelector("#seven").addEventListener("click", ()=>{
      temp = 7;
    })

    document.querySelector("#eight").addEventListener("click", ()=>{
      temp = 8;
    })

    document.querySelector("#nine").addEventListener("click", ()=>{
      temp = 9;
    })

    document.querySelector("#zero").addEventListener("click", ()=>{
      temp = 0;
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
