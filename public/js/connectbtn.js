const connectBtnHandler = async (event, req) => {
  event.preventDefault();

  const connected_to_id = event.target.dataset.connectedToId;
  const user_id = document.querySelector('.id-holder').dataset.id

  console.log('here')
  console.log(connected_to_id)
  console.log(user_id)

  const response = await fetch('/api/connections', {
    method: 'POST',
    body: JSON.stringify({ user_id, connected_to_id }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  console.log('Response data:', data);

  if (response.ok) {
    alert('Connection added!');
  } else {
    alert('Connection failed. You are already connected to this person!');
  }
}

document.querySelectorAll('.connect-btn').forEach(button => {
  button.addEventListener('click', connectBtnHandler);
});