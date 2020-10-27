function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "meny") {
        x.className += " responsive";
    } else {
        x.className = "meny";
    }
}