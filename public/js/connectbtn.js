const connectBtnHandler = async (event, req) => {
  event.preventDefault();

  console.log(req.session.user_id)

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

document.querySelectorAll('.connect-btn').forEach(button => {
  button.addEventListener('click', connectBtnHandler);
});