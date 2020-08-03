<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
</head>
<body>
    <h1>I am a big header!!!</h1>
    <div id="myDiv">
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
        <p>Fourth paragraph</p>
    </div>
    <ul id="myList">
        <li>Make</li>
        <li>me</li>
        <li>horizontal!</li>
    </ul>
    <span>Make me invisible, please!</span>

    <script>
        let elem1 = document.getElementsByTagName("h1")[0];
        elem1.style.backgroundColor = "chartreuse";
        let elem2 = document.getElementById("myDiv");
        elem2.firstElementChild.style.fontWeight = "bold";
        elem2.firstElementChild.nextElementSibling.style.color = "red";
        elem2.lastElementChild.previousElementSibling.style.textDecoration = "underline";
        elem2.lastElementChild.style.fontStyle = "italic";
        let elem3 = document.getElementById("myList");
        elem3.firstElementChild.style.display = "inline";
        elem3.lastElementChild.style.display = "inline";
        elem3.firstElementChild.nextElementSibling.style.display = "inline";
        let elem4 = document.getElementsByTagName("span")[0];
        elem4.style.visibility = "hidden";
    </script>
</body>
</html>
