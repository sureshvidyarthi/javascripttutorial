setInterval(myFunction, 1000);

function myFunction() {
    const date = new Date();
    document.getElementById("main").innerHTML = date.toLocaleTimeString();
    document.getElementById("demo").innerHTML = date.toLocaleDateString();
}
