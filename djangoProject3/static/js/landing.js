// Fetch users data from the API endpoint
fetch('https://panorbit.in/api/users.json')
	.then(response => response.json())
	.then(data => {
		const userCards = document.querySelector('.user-cards');
		data.users.forEach(user => {
			// Create a user card element
			const userCard = document.createElement('div');
			userCard.classList.add('user-card');

			// Add user image and name to the card
			userCard.innerHTML = `
				<img src="${user.profilepicture}" alt="${user.name}">
				<div class="user-name">${user.name}</div>
			`;

			// Add click event listener to the card
			userCard.addEventListener('click', () => {
				// Redirect to user profile page
				window.location.href = `profile.html?id=${user.id}`;
			});

			// Add the user card to the user cards container
			userCards.appendChild(userCard);
		});
	})
	.catch(error => console.error(error));
