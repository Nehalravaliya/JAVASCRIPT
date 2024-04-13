function calculate(){
    var operation=document.getElementById("operation").value;
    var num1;
    var num2;
    var result;

    if(operation=num1+num2)
    {
        document.write(result=num1+num2);
    }else if(operation=num1-num2)
    {
        document.write(result=num1-num2);
    }else if(operation=num1*num2)
    {
        document.write(result=num1/num2);
    }else if(operation=num1-num2)
    {
        document.write(result=num1-num2);
    }
    else{
        document.write(result="Invalid operation");
    }

    document.getElementById('result').innerText = "Result: " + result;
}