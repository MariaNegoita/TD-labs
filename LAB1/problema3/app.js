var counter = 0;

function printValue(divId, value){ 
  //document.getElementById(divId).innerHTML = value;
  $("#"+divId ).html(value)
}
printValue("counter", 0);

//document.getElementById("inc").addEventListener("click",increment);
$("#inc").on('click',increment);
$("#dec").on('click',decrement);

function increment(){
counter ++; printValue("counter", counter);
}

function decrement(){
    counter --; printValue("counter", counter);
}