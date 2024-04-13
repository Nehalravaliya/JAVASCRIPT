function hoursFunction(){
    var hours = document.getElementById("hours");
    
    const now = new Date();
    const currentHour = now.getHours();
    document.getElementById("hours").innerHTML="";
    for(var h = currentHour; h <= 23; h++) {
        hours.innerHTML += "<option>" + h + "</option>";
    }
}

function minsFunction(){
    var mins = document.getElementById("mins");

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    var startMinute;
    if (hours.value == currentHour) {
        startMinute = currentMinute;
        console.log("in if",startMinute);
    }else if(hours.value != currentHour){
        startMinute = 0;
        console.log("in else if",startMinute);
    }else{
        "";
    }

     document.getElementById("mins").innerHTML ="";
    for(var m = startMinute; m <= 59; m++) {
       document.getElementById("mins").innerHTML += ("<option>" + m + "</option>");
    }
    

}
function monthFunction() {
    var monthsDropdown = document.getElementById("months");
    monthsDropdown.innerHTML = "";
    
    const currentMonth = new Date().getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    for (var i = currentMonth; i < months.length; i++) {
        monthsDropdown.innerHTML += "<option value='" + (i + 1) + "'>" + months[i] + "</option>";
    }
}

function daysFunction() {
    var daysDropdown = document.getElementById("days");
    daysDropdown.innerHTML = "";
    
    const currentDay = new Date().getDate();
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

    for (var day = currentDay; day <= daysInMonth; day++) {
        daysDropdown.innerHTML += "<option value='" + day + "'>" + day + "</option>";
    }
}
    
    function yearsFunction() {
    var yearsDropdown = document.getElementById("years");
    yearsDropdown.innerHTML = "";
    
    const currentYear = new Date().getFullYear();
    const futureYears = 10;
    
    for (var year = currentYear; year <= currentYear + futureYears; year++) {
        yearsDropdown.innerHTML += "<option value='" + year + "'>" + year + "</option>";
    }
}


