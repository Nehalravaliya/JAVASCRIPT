function calculate(event) {
    var num1 =document.getElementById('num1').value;
    var num2 =document.getElementById('num2').value;
    var operation = document.getElementById('operation').value;
    
   // event.preventDefault();
    var result; 
    

     switch(operation)
{
    case "addition":
     result=parseInt(num1)+parseInt(num2);
     break;
     case "subtraction":
        result=num1-num2;
        break;
      case "multiplication":
       result =num1*num2;
       break;
     case "division":
        result=num1/num2; 
        break;
     case "module":
       result=num1%num2;
        break;
        default:
        document.write("invalid input");

}
if(num1 != "" && num2 != "")
    {
        document.getElementById('result').innerText = "Result: " + result;

    }
    

}