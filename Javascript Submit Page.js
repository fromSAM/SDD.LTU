<!DOCTYPE html>
<html>
   <head>
      <title>Javascript Submit</title>
      <script type = "text/javascript">

         function validateForm() {
             var name = document.forms["myForm"]["fullName"].value;
             if(name == "") {
                 alert("Please enter your name");
                 return false;
             }
             return true;
         }

         function submitByJavascript()  {

             var valid = validateForm();
             if(!valid)  {
               return;
             }

             var myForm = document.forms["myForm"];

             myForm.submit();
         }
      </script>
   </head>
   <body>

      <h2>Submit a from with Javascript</h2>

      <div style="border:1px solid #ddd; padding: 5px;">

         <form name="myForm" action="process-action.html" onsubmit = "return validateForm()">
            Your Name: <input type="text" name = "fullName" value =""/>
            <br/><br/>
            <button type="submit">Submit</button>
         </form>

      </div>
       <br/>

      <!-- A Button outside the form -->
      Button outside the form:
      <button onclick="submitByJavascript()">Click Me to submit form</button>

   </body>
</html>
