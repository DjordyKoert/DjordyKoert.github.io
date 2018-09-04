function Rnumber() {
    var result = prompt("enter getal:");
    var R = Math.floor(Math.random() * 10);
    if (result === null) return;
    if (!result) return Rnumber();
    if (isNaN(result)) return Rnumber();
    if ((result > 10 || result < 0) && result !=666) return window.alert("Minimaal 0 en Maximaal 10");
    if (result == 666) return window.alert("3Spoopy5Me");
    result = parseInt(result);
    if (result == R) {
        var wins = GetCookie("wins")
        if (!wins) document.cookie = ("wins=1; expires=Thu, 25 Dec 2018 12:00:00 UTC;")
        else {
            wins = parseInt(wins);
            wins = wins + 1;
            window.alert("Lucky Number: " + R + "\n YOU LOSE! \n Total wins: " + wins)
            wins = toString(wins);
            document.cookie = ("wins="+ wins + "; expires=Thu, 25 Dec 2018 12:00:00 UTC;")
        }
    }
    if (result !== R) window.alert("Lucky Number: " + R + "\n YOU LOSE!");
}

function GetCookie(cwins) {
    var wins = cwins + "=";
    var DecodeCookie = decodeURIComponent(document.cookie);
    var ca = DecodeCookie.split(";");
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}