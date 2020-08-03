<!DOCTYPE html>
<html lang="en">
<head>
    <title> Project </title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content = "width=device-width, initial-scale=1, maximum-scale=1"/>
</head>
<body>
	<h2>Article header</h2>      
      <div id="text">
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
      </div>
    <p>Another text</p>
    
    <script>
        let elem = document.querySelectorAll("#text p");
        for (let i = 0; i < elem.length; i++) {
            document.write("Selector text " + [i] +":" + " " + elem[i].innerText +"<br/>");
        }
    </script>
</body>

</html>
