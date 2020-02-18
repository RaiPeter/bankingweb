
//Month Change
var month=['January','February','March','April','May','June','July','August','September','October','November','December','','manish'];
document.getElementById('monthsChange').innerHTML=month[new Date().getMonth()]







var mainController=(function(){
    document.getElementById('check').addEventListener('click',()=> {
        ctrlAdd();
    })
    document.getElementById('amount').addEventListener('keypress',(event) =>{
        if(event.keyCode===13){
            ctrlAdd();
        }
    })
    function ctrlAdd() {
        user.add()
    }             
})()

var user=(function(){
   function addDetails() {
        if ( document.getElementById('amount').value=="") {
            alert('Please enter the details first!!!')
        }
         else {
            if(document.getElementById('selector').value=='Desposit'){
                document.getElementById('balanceChange').innerHTML = '+'+document.getElementById('amount').value
                document.getElementById('depositChange').innerHTML = '+'+document.getElementById('amount').value
                document.getElementById('balanceChange').innerHTML = '+'+data.addition()
                document.getElementById('depositChange').innerHTML = '+'+data.addIncrement()
                bottomDisp()
              }
              else{
                document.getElementById('balanceChange').innerHTML = '+'+document.getElementById('amount').value
                document.getElementById('withdrawChange').innerHTML = '+'+document.getElementById('amount').value
                document.getElementById('balanceChange').innerHTML = '+'+data.subtraction()
                document.getElementById('withdrawChange').innerHTML = '+'+data.subIncrement()
                bottomDisp()
              }
        }
        
    }
    function bottomDisp() {
        if(document.getElementById('selector').value=='Desposit'){
            let div=document.createElement("p")
            let details=document.createTextNode(`${document.getElementById('selector').value} by 
              ${document.getElementById('description').value} of Rs.${ document.getElementById('amount').value}`)
            div.appendChild(details)
            let box=document.getElementById("box2")
            box.appendChild(div)
        }
        else{
            let div=document.createElement("p")
            let details=document.createTextNode(`${document.getElementById('selector').value} by
              ${document.getElementById('description').value} of Rs.${document.getElementById('amount').value}`)
             div.appendChild(details)
             let box=document.getElementById("box1")
             box.appendChild(div)
            }
     }   
    return{
        inputData:function(){ 
        return{
        select : document.getElementById('selector').value,
        description : document.getElementById('description').value,
        amount : document.getElementById('amount').value,
        main:document.getElementById('balanceChange').innerHTML,
        sb:document.getElementById('withdrawChange').innerHTML,
        ad: document.getElementById('depositChange').innerHTML
            }
        },
        add:function(){
            return addDetails()
        }
    }
    
})()

var data=(function(){
    var mainBal = user.inputData().main
    var sub= user.inputData().sb
    var add= user.inputData().ad
    console.log(Number(document.getElementById('balanceChange').innerHTML) + 500);
    
    function addMain() {
        return mainBal=Number(mainBal) + Number(user.inputData().amount)  
        }
    function subMain() {
        return mainBal=Number(mainBal) - Number(user.inputData().amount)
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









