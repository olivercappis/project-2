const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log('check 2')

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {

    console.log('check 3')
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response)

    if (response.ok) {
      console.log('called')
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};


console.log('check 1')
document
  .querySelector('#menBtn')
  .addEventListener('click', loginFormHandler);
