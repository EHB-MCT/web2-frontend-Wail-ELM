const myChallengesList = document.getElementById('my-challenges');
const allChallengesList = document.getElementById('all-challenges');

function renderMyChallenges(challenges) {
  myChallengesList.innerHTML = '';

  challenges.forEach(challenge => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div>
        <strong>${challenge.text}</strong>
        <p>${challenge.description}</p>
        <p>${challenge.dataset}</p>
        <img src="${challenge.picture}" alt="Image du challenge">
        <p>${challenge.result}</p>
      </div>
      <button class="delete-button" data-challenge-id="${challenge.challengeId}">Supprimer</button>
    `;

    listItem.querySelector('.delete-button').addEventListener('click', () => {
      const challengeId = challenge.challengeId;
      deleteChallenge(challengeId);
    });

    myChallengesList.appendChild(listItem);
  });
}

function renderAllChallenges(challenges) {
  allChallengesList.innerHTML = '';

  challenges.forEach(challenge => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div>
        <strong>${challenge.text}</strong>
        <p>${challenge.description}</p>
        <p>${challenge.dataset}</p>
        <img src="${challenge.picture}" alt="Image du challenge">
        <p>${challenge.result}</p>
      </div>
    `;

    allChallengesList.appendChild(listItem);
  });
}


function fetchAllChallenges() {
  fetch('http://localhost:5000/all-challenges')
    .then(response => response.json())
    .then(data => {
      renderAllChallenges(data.challenges);
    })
    .catch(error => console.error('Erreur lors de la récupération des challenges:', error));
}

function deleteChallenge(challengeId) {
  fetch(`http://localhost:5000/deleteChallenge/${challengeId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      fetchMyChallenges();
    })
    .catch(error => console.error('Erreur lors de la suppression du challenge:', error));
}
