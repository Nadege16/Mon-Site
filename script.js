// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('/users')
        .then(response => response.json())
        .then(users => {
            let userList = document.getElementById('users');
            users.forEach(user => {
                let listItem = document.createElement('li');
                listItem.textContent = `Nom: ${user.name}, Bio: ${user.bio}`;
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erreur:', error));
});
