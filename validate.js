//Month Change
var month=['January','February','March','April','May','June','July','August','September','October','November','December','','manish'];
document.getElementById('monthsChange').innerHTML=month[new Date().getMonth()]


// document.getElementById('upwd').addEventListener('keypress',()=>{

//     if(document.getElementById('upwd').value.length < 3){
//         document.getElementById('invalidPwd').style.visibility="visible"
//     }
// })
var mainController=(function(){
    

    document.getElementById('check').addEventListener('click',()=>{
        var selected=user.inputData().select
        var desc=user.inputData().description
        var amt=user.inputData().amount

        if(amt===""){
            alert('Please enter the details first!!')
        }
       else{
            if(selected=='Desposit'){
              user.inputData().mainBal.innerHTML=amt
              user.inputData().deposit.innerHTML=amt
              user.inputData().mainBal.innerHTML=data.addition()
              user.inputData().deposit.innerHTML=data.addIncrement()
              bottomDisp()
            }
            else{
            user.inputData().mainBal.innerHTML=amt
            user.inputData().withdraw.innerHTML=amt
            user.inputData().mainBal.innerHTML=data.subtraction()
            user.inputData().withdraw.innerHTML=data.subIncrement()
            bottomDisp()
            }
        }
        function bottomDisp() {
            if(selected=='Desposit'){
                console.log(selected)
                 var div=document.createElement("p")
                 var details=document.createTextNode(`${selected} by ${desc} of Rs.${amt}`)
                 div.appendChild(details)
                 var box=document.getElementById("box2")
                 box.appendChild(div)
            }
            else{
             var div=document.createElement("p")
                 var details=document.createTextNode(`${selected} by ${desc} of Rs.${amt}`)
                 div.appendChild(details)
                 var box=document.getElementById("box1").appendChild(div)
                
            }
         }   
        
    })
        
   
})()

var user=(function(){
   

    return{
        inputData:function(){ 
        return{
        select : document.getElementById('selector').value,
        description : document.getElementById('description').value,
        amount : document.getElementById('amount').value,
        mainBal: document.getElementById('balanceChange'),
        deposit: document.getElementById('depositChange'),
        withdraw: document.getElementById('withdrawChange')
      
            }
        }
            
        }
    
})()



var data=(function(){
    var mainBal=0
    var sub=0
    var add=0
    function addMain() {
        return mainBal=Number(user.inputData().amount) + Number(mainBal)
        }
    function subMain() {
        return mainBal=Number(mainBal)-Number(user.inputData().amount)
    }
    function addIncr() {
        return add=Number(user.inputData().amount) + Number(add)
    }
    function subIncr() {
        return sub=Number(user.inputData().amount) + Number(sub)
    }
    return{
        addition:function () {
           return addMain()        
        },
        subtraction:function () {
            return subMain()
        },
        addIncrement:function() {
            return addIncr()
        },
        subIncrement:function(){
            return subIncr()
        }
    }

 })()









