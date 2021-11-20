<script language = "JavaScript">
        function validate() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            if (username == null || username == "") {
                alert("Please enter the username.");
                return false;
            }
            if (password == null || password == "") {
                alert("Please enter the password.");
                return false;
            }
            alert('Login successful');
            
        } 
</script>

jquery form validation
function submitFunction(event){
	event.preventDefault();
}
$("#form_id").submit(submitFunction);

javascript form validation
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" 
method="post">

 Name: <input type="text" name="fname">

<input type="submit" value="Submit">

</form>
