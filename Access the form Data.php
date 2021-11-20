<input type="text"  id="username"/>
<input type="password"  id="password"/>

// Access field via ID:
var field =  document.getElementById("fieldId");
var value = field.value;

Access Form fields through the name attribute:
<form name="myForm" ...>
    <input type="text" name="username"/>
    <input type="password" name = "password"/>
    <button type="submit">Submit</button>
</form>

// Get form via form name:
var myForm = document.forms["myForm"];

var u = myForm["username"].value;
var p = myForm["password"].value;
