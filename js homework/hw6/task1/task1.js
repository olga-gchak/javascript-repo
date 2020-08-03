<!DOCTYPE html>
<html lang="en">
<head>
    <title> Project </title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content = "width=device-width, initial-scale=1, maximum-scale=1"/>
</head>
<body>
        <div id="test">First</div>
        
        <script>
                document.getElementById("test").innerHTML = "Second";
                document.getElementsByTagName("div")[0].innerHTML = "Third";
        </script>
  </body>	
</html>
