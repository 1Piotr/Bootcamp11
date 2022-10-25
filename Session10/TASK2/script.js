// calculating BMI formula
function calc() {
    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;
    var BMI = w / ((h / 100) * (h / 100));  
    document.getElementById("BMI-1").innerHTML= BMI.toFixed(2);
}

// calculating Imperial BMI formula
function calcImp() {
    var stone = parseInt(document.getElementById("stones").value);
    var fts = parseInt(document.getElementById("fts").value);
    var pound = (14 * stone) + parseInt(document.getElementById("pounds").value);
    var inch = (12 * fts) + parseInt(document.getElementById("inches").value);
    var BMI = (pound / ((inch * inch))) * 703;
    document.getElementById("BMI-2").innerHTML= BMI.toFixed(2);
}

function metric() {
    document.getElementById("metric").style="display:bloc";
    document.getElementById("imperial").classList.add("non-active");
}
function imperial() {
    document.getElementById("metric").style="display:none";
    document.getElementById("imperial").classList.remove("non-active");

}
