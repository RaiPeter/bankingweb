document.getElementById("logoutbtn").addEventListener('click',()=>{

    window.open("login.html","_self")

})


const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const d = new Date();
document.getElementById("month").innerHTML=monthNames[d.getMonth()];


var mainController=(function(){

document.getElementById('checktick').addEventListener('click',()=>{

console.log(`${uiController.inputdata().optionenter},${uiController.inputdata().descriptionenter},${uiController.inputdata().amountenter}`);
transaction.calculatebalance();
uiController.updateElement()
uiController.addelement()


})

return{
inputdata:function(){
  return{
    option:uiController.inputdata().optionenter,
    desc:uiController.inputdata().descriptionenter,
    amt:uiController.inputdata().amountenter,
    

  }
}


}

})()



var uiController=(function(){  


function addelement1(){
   
     
    if(mainController.inputdata().option==="Deposit")
    {
      
     function printw(){

            var text=document.createElement('p')
            text.textContent=`${mainController.inputdata().desc },${mainController.inputdata().amt }`
            document.getElementById("showdi").appendChild(text);

      }
      printw();
      
    }
        
    else if(mainController.inputdata().option==="WithDraw")
  {
    function printw(){

      var text=document.createElement('p')
      text.textContent=`${mainController.inputdata().desc  },${mainController.inputdata().amt }`
      document.getElementById("showwi").appendChild(text);

    }
     printw();
  }
           
   


}
function updateElement1(){




     
if(mainController.inputdata().option==="Deposit")
{
document.getElementById("deposit").innerHTML=+mainController.inputdata().amt
document.getElementById("balance").innerHTML=+transaction.inputdata().main


}
  else 
  {
    document.getElementById("withdraw").innerHTML=+mainController.inputdata().amt
    document.getElementById("balance").innerHTML=+transaction.inputdata().main
    
  }
  




}

return{
updateElement:function(){
updateElement1();

},
addelement:function(){
      addelement1();
},
inputdata:function(){
  return{

    optionenter:document.getElementById("select").value,
    descriptionenter:document.getElementById("description").value,
    amountenter:document.getElementById("amount").value

  }
}  



}



})()



var transaction=(function(){


var mainbalance=0;


function calculate(){

  

        if(mainController.inputdata().option==="Deposit"){

                mainbalance=mainbalance+(Number)(mainController.inputdata().amt);
                
                
        }
        else{

                mainbalance=mainbalance-(Number)(mainController.inputdata().amt);
                


        }
        
  
            

}

return{
    calculatebalance:function(){

      calculate();
     },
      inputdata:function(){
            return{

                  
                  main:mainbalance  

            }
      }
}
})()