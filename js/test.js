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
        var wins = parseInt(getCookie("wins"));
        if (!wins || wins == null) {
            document.cookie = ("wins=1; expires=Thu, 25 Dec 2018 12:00:00 UTC;");
            console.log("Wins bestaat niet");
        }
        else {
            wins = wins + 1;
            window.alert("Lucky Number: " + R + "\n YOU WIN! \n Total wins: " + wins)
            wins = wins.toString();
            document.cookie = ("wins="+ wins + "; expires=Thu, 25 Dec 2018 12:00:00 UTC;")
        }
    }
    if (result !== R) window.alert("Lucky Number: " + R + "\n YOU LOSE!");
}

function getCookie(cwins) {
    var wins = cwins + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(wins) == 0) {
            return c.substring(wins.length, c.length);
        }
    }
    return '';
}

function xmlload() {
    if (confirm("Dit zal de sitemap laden \nwilt u verdergaan?")) {
        window.location.href = "sitemap.xml";
    }
}

function imgeaster() {
    document.getElementsByClassName("txtimg")[0].id = "txtimg_anim";
}