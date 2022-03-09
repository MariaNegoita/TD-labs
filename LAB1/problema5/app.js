function printValue(divId, value){ 
    //document.getElementById(divId).innerHTML = value;
    $("#"+divId ).html(value)
}

  var equal=document.getElementById("equal");
  equal.addEventListener("click",results);

  var op="";
  function opr(){
    op=this.id;
  }

document.getElementById("suma").addEventListener("click",opr);
document.getElementById("dif").addEventListener("click",opr);
document.getElementById("prod").addEventListener("click",opr);
document.getElementById("imp").addEventListener("click",opr);
document.getElementById("mod").addEventListener("click",opr);

function results(){
    var firstNumberText = $('#firstNumber').val();
    var secondNumberText = $('#secondNumber').val();
    var firstNumber = parseInt(firstNumberText);
    var secondNumber = parseInt(secondNumberText);
    var result;

    switch(op){
        case "suma":
        result = firstNumber+secondNumber;
        break;

        case "dif":
            result = firstNumber-secondNumber;
            break;

        case "prod":
             result = firstNumber*secondNumber;
            break;
        
         case "imp":
            result = firstNumber/secondNumber;
            break;  
        
        case "mod":
            result = firstNumber%secondNumber;
            break;
        default:
        result=0;
    }
    printValue("result",result);
    console.log;
}

