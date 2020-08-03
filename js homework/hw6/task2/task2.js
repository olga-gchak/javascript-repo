<!DOCTYPE html>
<html lang="en">
<head>
    <title> Project </title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content = "width=device-width, initial-scale=1, maximum-scale=1"/>
</head>
<body>
   <img class="image" src="dog.jpg">

    <script>
        document.getElementsByClassName("image")[0].src = "cat.jpg";
        let elem = document.getElementsByTagName("img")[0];
        alert(elem.outerHTML);
    </script>
</body>

</html>
