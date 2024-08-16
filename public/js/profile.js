async function loadProfileData() {
    try {
        const response = await fetch('/profile');
        const profileData = await response.json();

        // Populate "My Profile" section
        document.getElementById('profile-first-name').textContent = profileData.first_name;
        document.getElementById('profile-last-name').textContent = profileData.last_name;
        document.getElementById('profile-age').textContent = profileData.age;
        document.getElementById('profile-about-you').textContent = profileData.about_you;

        // Populate "Connections" section
        const connectionCard = document.querySelector('.connection-card');
        profileData.connections.forEach(connection => {
            connectionCard.querySelector('.connection-first-name').textContent = connection.first_name;
            connectionCard.querySelector('.connection-last-name').textContent = connection.last_name;
            connectionCard.querySelector('.connection-age').textContent = connection.age;
            connectionCard.querySelector('.connection-about-you').textContent = connection.about_you;
        });

    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

// Call the function to load the profile data when the page loads
document.addEventListener('DOMContentLoaded', loadProfileData);