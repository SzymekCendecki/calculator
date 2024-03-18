import "./style.scss";

document.addEventListener("DOMContentLoaded", ()=>{ 
    console.log("DOM fully loaded and parsed!")

  
      // clear one
      function pressClear() {
        outputLower.innerHTML = outputLower.innerHTML.slice(0, -1);
      }

     document.querySelector("#allClear").addEventListener("click", ()=>{
        document.querySelector('#upper').innerHTML = '';
        document.querySelector('#lower').innerHTML = '0';
     })


     document.querySelector("#clear").addEventListener("click", ()=>{
        document.querySelector('#lower').innerHTML = document.querySelector('#lower').innerHTML.slice(0, -1);
     })

})
