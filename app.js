function calculator(x){
    
    const result=document.getElementById('display');
    result.value=result.value+x;
          
}
function calculate(){
    const total=document.getElementById('display').value;
    const totalResult=eval(total);
    document.getElementById('display').value=totalResult;
}
function clr(){
    document.getElementById('display').value="";
}
 