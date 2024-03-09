import "./style.scss";

document.addEventListener("DOMContentLoaded", ()=>{ 
    console.log("DOM fully loaded and parsed!")

   document.querySelector("#add").addEventListener("click", ()=>{
    console.log("dodawanie");
    let value1 = document.querySelector("#number1").value;
    let value2 = document.querySelector("#number2").value;

    if(parseFloat(value1) === NaN){
        document.querySelector("#result").innerHTML = "pole jeden nie jest wypełnione";
    }else if(parseFloat(value2) === NaN){
        document.querySelector("#result").innerHTML = "pole dwa nie jest wypełnione";        
    }else{
        let result =  parseFloat(value1) + parseFloat(value2);
        document.querySelector("#result").innerHTML = result;
    }

    // switch (parseFloat(value1), parseFloat(value2)) {
    //     case parseFloat(value1) === NaN:
    //         document.querySelector("#result").innerHTML = "pole jeden nie jest wypełnione";
    //       break;
    //     case parseFloat(value2) === NaN:
    //         document.querySelector("#result").innerHTML = "pole dwa nie jest wypełnione";
    //       break;
    //     default:
    //         let result =  parseFloat(value1) + parseFloat(value2);
    //         console.log(result);
    //         document.querySelector("#result").innerHTML = result;
    //   }
  });

   document.querySelector("#subtract").addEventListener("click", ()=>{
    console.log("odejmowanie");
   })

   document.querySelector("#multiply").addEventListener("click", ()=>{
    console.log("mnożenie");
   })

   document.querySelector("#divide").addEventListener("click", ()=>{
    console.log("dzielenie");
   })
})
