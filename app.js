 
function calculator(x){

    const result=document.getElementById('res');
    result.value=result.value+x;
    const results=document.getElementById('res');
    results.value=eval(result.value);
        
}