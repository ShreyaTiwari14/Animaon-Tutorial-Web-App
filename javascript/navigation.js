function toggleMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className.indexOf("responsive") === -1) {
        x.className += " responsive";
    } else {
        x.className = x.className.replace(" responsive", "");
    }
}
