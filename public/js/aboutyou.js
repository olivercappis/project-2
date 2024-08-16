document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('menBtn');

    submitButton.addEventListener('click', function () {
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value.trim();
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const age = document.getElementById('age').value.trim();
        const gender = document.getElementById('gender').value.trim();
        const aboutMe = document.getElementById('about-me').value.trim();


        // Check if all required fields are filled and validate age
        if (!email || !password || !firstName || !lastName || isNaN(age)) {
            alert('Please fill in all required fields and ensure age is a number.');
            return;
        }

        const formData = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            age: age,
            gender: gender,
            about_you: aboutMe
        };
        console.log('FormData being sent:', formData);
        fetch('api/users/about_you', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
        alert('Signup successful!');
        window.location.href = '/';

    });
});