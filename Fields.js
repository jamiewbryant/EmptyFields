//http://www.w3schools.com/code/tryit.asp?filename=FBGZOL0REG36
<!DOCTYPE html>
<html>
<head>
<style>
body{color:#000;font-weight:bold;height:35px;width:100px;}
button{color:#000;font-weight:bold;height:36px;width:100px;}
</style>

</head>
<body>

<h2 id="greet">Please login</h2>
First Name: <input type="text" id="txt1" size="25"><br><br>
Last Name: <input type="text" id="txt2" size="25"><br><br>
<button onclick="greet()">Login</button>

<script>
function greet() {
var fname=document.getElementById("txt1").value;
var lname=document.getElementById("txt2").value;
var greet=document.getElementById("greet").innerHTML="Signed in as:<br>"+fname+" "+lname;
		txt1.value=""; txt2.value="";}
</script>


</body>
</html> 
