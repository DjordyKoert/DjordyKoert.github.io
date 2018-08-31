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

        <div id="txt1">
            <div id="txttitel">
                Waarom het HBO bij mij past.
            </div>
            <span id="txtspan">
            <?php include("txt/Hbo_past.txt"); ?>
            <span>
        </div>
        <div id="txtimg">
            <img id="txtimg" style="width:30px;height:30px;float:right;" src="Img/Ik.jpg">
        </div>
    </body>
</html>