const connectBtnHandler = async (event) => {
    event.preventDefault();
  
      const response = await fetch('/api/connection', {
        method: 'POST',
        body: JSON.stringify({ user_id, connected_to_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log('Connection added!');
      } else {
        alert('Connection failed.');
      }
    }

document
  .querySelector('#connect-btn')
  .addEventListener('click', connectBtnHandler);