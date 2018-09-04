function Rnumber() {
    var result = prompt("enter getal:");
    var R = Math.floor(Math.random() * 10);
    if (result === null) return window.alert("Je bent stom >:(");
    if (!result) return Rnumber();
    if (isNaN(result)) return Rnumber();
    if (result > 10 && result !=666) return window.alert("Ben je dom ofzo?");
    if (result == 666) return window.alert("3Spoopy5Me");
    result = parseInt(result);
    if (result == R) {
        window.alert("Lucky Number: " + R + "\n YOU WIN!");
    }
    if (result !== R) window.alert("Lucky Number: " + R + "\n YOU LOSE!");
}