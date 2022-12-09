function validateNumber() {
    let x = document.forms["myForm"]["number"].value;
    if (x >= 1 && x <= 10) {
        alert("Number is in b/w 1 and 10");
        // return false
    }
    else if (x >= 11 && x <= 50) {

        alert("Number is in b/w 11 and 50");
    }
    else {
        alert("Number is greater than 50");
    }

}

document.getElementById("main").style.backgroundColor = "purple";
document.getElementById("main").style.color = "white";
document.getElementById("main").style.padding = "10px";
document.getElementById("main").style.textAlign = "center";