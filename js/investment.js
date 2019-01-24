let hourly = 300;

document.getElementById("shooting_hours_02").onclick = function() {givePrice2()};
function givePrice2() {
    $("li").removeClass("selected");
    $("#shooting_hours_02").addClass("selected");
    var checkBox = document.getElementById("second_shooter");
    var text = document.getElementById("investment_totals");
    if (checkBox.checked == true){
        document.getElementById("investment_totals").innerHTML = "$800 TOTAL ($400/HR) + TAX";
    } else {
        document.getElementById("investment_totals").innerHTML = "$650 TOTAL ($325/HR) + TAX";
    }
}

document.getElementById("shooting_hours_03").onclick = function() {givePrice3()};
function givePrice3() {
    $("li").removeClass("selected");
    $("#shooting_hours_03").addClass("selected");
    var checkBox = document.getElementById("second_shooter");
    var text = document.getElementById("investment_totals");
    if (checkBox.checked == true){
        document.getElementById("investment_totals").innerHTML = "$1,185 TOTAL ($395/HR) + TAX";
    } else {
        document.getElementById("investment_totals").innerHTML = "$960 TOTAL ($320/HR) + TAX";
    }
}

document.getElementById("shooting_hours_04").onclick = function() {givePrice4()};
function givePrice4() {
    $("li").removeClass("selected");
    $("#shooting_hours_04").addClass("selected");
    var checkBox = document.getElementById("second_shooter");
    var text = document.getElementById("investment_totals");
    if (checkBox.checked == true){
        document.getElementById("investment_totals").innerHTML = "$1,560 TOTAL ($390/HR) + TAX";
    } else {
        document.getElementById("investment_totals").innerHTML = "$1,260 TOTAL ($315/HR) + TAX";
    }
}

document.getElementById("shooting_hours_05").onclick = function() {givePrice5()};
function givePrice5() {
    $("li").removeClass("selected");
    $("#shooting_hours_05").addClass("selected");
    var checkBox = document.getElementById("second_shooter");
    var text = document.getElementById("investment_totals");
    if (checkBox.checked == true){
        document.getElementById("investment_totals").innerHTML = "$1,925 TOTAL ($385/HR) + TAX";
    } else {
        document.getElementById("investment_totals").innerHTML = "$1,550 TOTAL ($310/HR) + TAX";
    }
}

document.getElementById("shooting_hours_06").onclick = function() {givePrice6()};
function givePrice6() {
    $("li").removeClass("selected");
    $("#shooting_hours_06").addClass("selected");
    var checkBox = document.getElementById("second_shooter");
    var text = document.getElementById("investment_totals");
    if (checkBox.checked == true){
        document.getElementById("investment_totals").innerHTML = "$2,280 TOTAL ($380/HR) + TAX";
    } else {
        document.getElementById("investment_totals").innerHTML = "$1,830 TOTAL ($305/HR) + TAX";
    }
}

document.getElementById("shooting_hours_07").onclick = function() {givePrice7()};
function givePrice7() {
    $("li").removeClass("selected");
    $("#shooting_hours_07").addClass("selected");
    var checkBox = document.getElementById("second_shooter");
    var text = document.getElementById("investment_totals");
    if (checkBox.checked == true){
        document.getElementById("investment_totals").innerHTML = "$2,625 TOTAL ($375/HR) + TAX";
    } else {
        document.getElementById("investment_totals").innerHTML = "$2,100 TOTAL ($300/HR) + TAX";
    }
}

document.getElementById("shooting_hours_08").onclick = function() {givePrice8()};
function givePrice8() {
    $("li").removeClass("selected");
    $("#shooting_hours_08").addClass("selected");
    var checkBox = document.getElementById("second_shooter");
    var text = document.getElementById("investment_totals");
    if (checkBox.checked == true){
        document.getElementById("investment_totals").innerHTML = "$2,960 TOTAL ($370/HR) + TAX";
    } else {
        document.getElementById("investment_totals").innerHTML = "$2,360 TOTAL ($295/HR) + TAX";
    }
}
