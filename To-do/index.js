let entertask = document.querySelector('.task');
 let inputtxt = document.querySelector('.inp');

 let btn = document.querySelector('button');

 btn.addEventListener('click',generatetask);

 function generatetask(){
    entertask.innerHTML=inputtxt.value;
 }