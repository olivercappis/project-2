document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const aboutMe = document.getElementById('about-me').value;

        const formData = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender,
            aboutMe: aboutMe
        };

        // Send form data to server
        fetch('/api/users/about_you', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) 
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Signup successful!');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
