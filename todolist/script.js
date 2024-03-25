const inputbox=document.getElementById('input-box');
const listcon=document.getElementById('list');
function addtask(){
    if(inputbox.value===''){
        alert("Please Enter the Valid Task");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value;
        
        let span = document.createElement('span')
        span.innerHTML="\u00d7";
        listcon.appendChild(span);
        listcon.appendChild(li);
    }
}
