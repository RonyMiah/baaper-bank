document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('Button Clicked')

    // Get User Email 
    const emailField = document.getElementById('emailField');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // Get user Password 

    const passwordField = document.getElementById('passwordField');
    const userPassword = passwordField.value;
    // console.log(userPassword);


    // Check User Email And Password 

    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {

        window.location.href = 'banking.html';

    }

});