<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Stylesheets/Main.css">
        <title>Home</title>
    </head>

    <body>
        <ul id="browse">
            <li id="browseurl"><a href="index.php">Home</a></li>
            <li id="browseurl"><a href="introductie.php">Persoonlijke introductie</a></li>
            <li id="browseurl"><a href="profile.php">Profile</a></li>
        </ul>

        <div id="curpage">
            <span id="curpagespan">
                Home
            </span>
        </div>
        <br>

        <div id="txt">
            <img id="txtimg" style="width:20%;height:40%;float:right;" src="Img/oof.png">
            <div id="txttitel">
                Waarom het HBO bij mij past.
            </div>
            
            <span id="txtspan">
                <?php include("txt/Hbo_past.txt"); ?>
        	</span>
        </div>
        <br>
        <div id="txt">
            <div id="txttitel">
                Waarom de opleiding bij mijn persoonlijkheid past.
            </div>
            <?php include("txt/Opleiding.txt"); ?>
        </div>
    </body>
</html>