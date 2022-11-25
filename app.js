
// make a funtion
function myFunction() {
   // show only the first row of the table class="table table-striped"
    var table = document.getElementsByClassName("table table-striped")[0];
    var rows = table.getElementsByTagName("tr");
    for (var i = 2; i < rows.length; i++) {
        rows[i].style.display = "none";
        }
    // make the button disappear
    document.getElementById("myBtn").style.display = "none";
    // make button2 appear
    document.getElementById("myBtn2").style.display = "block";

    }

// make a funtion
function myFunction2() {
    // show all the rows of the table class="table table-striped"
    var table = document.getElementsByClassName("table table-striped")[0];
    var rows = table.getElementsByTagName("tr");
    for (var i = 2; i < rows.length; i++) {
        rows[i].style.display = "";
        }
    // make the button2 disappear
    document.getElementById("myBtn2").style.display = "none";
    // make button appear
    document.getElementById("myBtn").style.display = "block";
    }

// make a hidden popup
function myFunction3() {
    document.getElementById("myPopup").classList.toggle("show");
    }

    