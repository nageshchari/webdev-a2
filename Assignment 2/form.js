const myForm = document.querySelector('#myForm');

myForm.addEventListener('submit', function(event) {
	event.preventDefault();

	const fullname = document.querySelector('#fullname').value;
	const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const phonenumber = document.querySelector('#phonenumber').value;
    const address = document.querySelector('#address').value;
	const cllgname = document.querySelector('#cllgname').value;
	
document.querySelector('.button').onclick = function(){
	var password = document.querySelector('.cpassword').value;

	if(password == ""){
		alert("Field cannot be empty.");
	}
	else if(password != cpassword){
		alert("Password didnt match try again.");
		return false
	}
	else if(password == cpassword){
		alert("Password Matched")
	}
	return true
}
	const formData = {
		fullname,
		username,
        email,
        phonenumber,
        address,
		cname,
		

	};

	localStorage.setItem('formData', JSON.stringify(formData));

    console.log(formData);

	window.location.href = '/details.html';
});

