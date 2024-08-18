async function loadProfileData() {
    try {
        const response = await fetch('/profile');
        const profileData = await response.json();

        document.getElementById('profile-first-name').textContent = profileData.first_name;
        document.getElementById('profile-last-name').textContent = profileData.last_name;
        document.getElementById('profile-age').textContent = profileData.age;
        document.getElementById('profile-about-you').textContent = profileData.about_you;

        const connectionsContainer = document.getElementById('connections-container');
        connectionsContainer.innerHTML = ''; 

        profileData.connections.forEach(connection => {
            const connectionCard = document.createElement('div');
            connectionCard.className = 'connection-card';
            connectionCard.innerHTML = `
                <p>First Name: ${connection.first_name}</p>
                <p>Last Name: ${connection.last_name}</p>
                <p>Age: ${connection.age}</p>
                <p>About You: ${connection.about_you}</p>
            `;

            connectionsContainer.appendChild(connectionCard);
        });

    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProfileData);
