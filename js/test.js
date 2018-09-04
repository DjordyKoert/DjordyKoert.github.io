function Rnumber() {
    var result = prompt("enter getal:");
    var R = Math.floor(Math.random() * 10);
    if (!result) return Rnumber();
    if (isNaN(result)) return Rnumber();
    result = parseInt(result);
/*    var Rbool;
    var Lijst_ding = {
        Jij: "Moet dit begrijpen",
        Ik: "Heb dit gemaakt #tijdverspillen",
        Windows: "is aanstichter van alle problemen"
    }
    if (R < 0.4) Rbool = true;
    if (R > 0.8) Rbool = true; */
    if (result == R) {
        window.alert("Lucky Number: " + R + "\n YOU WIN!");
    }
    if (result !== R) window.alert("Lucky Number: " + R + "\n YOU LOSE!");
/*    switch (Rbool) {
        case true:
            window.alert("Probeer dit te begrijpen :D");
            window.alert(Lijst_ding.Jij);
            window.alert(Lijst_ding.Ik);
            Lijst_ding.Windows.length;
            break;
        case false:
            window.alert("Begrijp goed alstu. p.s. deze switch case is stom.");
            window.alert(Lijst_ding.Windows);
            break;
    } */
}