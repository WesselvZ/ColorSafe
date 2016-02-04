<?php require "logic/logic.php"; ?>
<script src="javascript/colorSystem.js"></script>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link type="text/stylesheet" rel="stylesheet" href="css/style.css" />
    </head>
    <body id="body">
        <form action="index.php" method="post">
            <button type="button" id="b1" ><</button><button type="button" id="red" name="red" value="">Red = 255</button><button type="button" id="b4" >></button><br />
            <button type="button" id="b2" ><</button><button type="button" id="green" name="green" value="">Green = 255</button><button type="button" id="b5" >></button><br />
            <button type="button" id="b3" ><</button><button type="button" id="blue" name="blue" value="">Blue = 255</button><button type="button" id="b6" >></button><br />
        </form>
    </body>
</html>