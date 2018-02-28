//var x = document.getElementById("form_sample");

var x = document.getElementById("form_sample");






var createForm = document.createElement('form');      // Creating A New Element Form

createForm.setAttribute("action", "");                // Setting Action Attribute on Form

createForm.setAttribute("method", "post");            // Setting Method Attribute on Form
x.appendChild(createForm);

var heading = document.createElement('h1');          //This is Where the Heading of the  Form Goes
heading.innerHTML = "CONTACT US";
createForm.appendChild(heading);

var line = document.createElement('hr');            //  Horizontal Row After Heading
createForm.appendChild(line);

var lineBreak = document.createElement('br');      //  Break and Move to the Next Line
createForm.appendChild(lineBreak);


var nameLabel = document.createElement('label');      // Create Label for Name Field


nameLabel.innerHTML = "Your Name :";                   // Set Field Labels
createForm.appendChild(nameLabel);


var inputElement = document.createElement('input'); // Create Input Field  for Name
inputElement.setAttribute("type", "text");
inputElement.setAttribute("name", "dname");

createForm.appendChild(inputElement);

function validateForm () {
	//alert("hello");
	if (inputElement.value == "") {

alert(" Kindly Complete Form");

} else{alert( 'welcome');}

}


var lineBreak = document.createElement('br');    //  Break and Move to the Next Line
createForm.appendChild(lineBreak);

var emailLabel = document.createElement('label'); // Create Label for E-mail Field
emailLabel.innerHTML = "Your Email :";
createForm.appendChild(emailLabel);




var emailElement = document.createElement('input'); // Create Input Field for E-mail
emailElement.setAttribute("type", "text");
emailElement.setAttribute("name", "demail");
createForm.appendChild(emailElement);

var emailBreak = document.createElement('br');
createForm.appendChild(emailBreak);

var messageLabel = document.createElement('label'); // Append Textarea
messageLabel.innerHTML = "Your Message :";
createForm.appendChild(messageLabel);

var texAreaElement = document.createElement('textarea');
texAreaElement.setAttribute("name", "dmessage");
createForm.appendChild(texAreaElement);

var messageBreak = document.createElement('br');
createForm.appendChild(messageBreak);

var submitElement = document.createElement('input'); // Append Submit Button
submitElement.setAttribute("type", "submit");
submitElement.setAttribute("name", "dsubmit");
submitElement.setAttribute("value", "Submit");
submitElement.setAttribute("onclick", validateForm());
createForm.appendChild(submitElement);

  

