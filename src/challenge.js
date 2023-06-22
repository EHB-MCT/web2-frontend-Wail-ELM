const createChallengeForm = document.getElementById('challenge-form');
const challengesList = document.getElementById('challenges');

function createChallenge(event) {
  event.preventDefault();

  const textInput = document.getElementById('text-input').value;
  const descriptionInput = document.getElementById('description-input').value;
  const datasetInput = document.getElementById('dataset-input').value;
  const pictureInput = document.getElementById('picture-input').value;
  const resultInput = document.getElementById('result-input').value;

  const userId = localStorage.getItem('userId');
  if (!userId) {
    console.log('Connectez-vous d\'abord');
    return;
  }

  const newChallenge = {
    text: textInput,
    description: descriptionInput,
    dataset: datasetInput,
    picture: pictureInput,
    result: resultInput,
    userId: userId 
  };

  fetch('http://localhost:5000/newChallenges', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newChallenge)
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Challenge créé avec succès') {
        console.log('Challenge créé avec succès');
        fetchChallenges();
      } else {
        console.log('Erreur lors de la création du challenge:', data.message);
      }
    })
    .catch(error => {
      console.error('Erreur lors de la création du challenge:', error);
    });
}

function deleteChallenge(challengeId) {
  fetch(`http://localhost:5000/deleteChallenge/${challengeId}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Défi supprimé avec succès') {
        console.log('Défi supprimé avec succès');
        fetchChallenges();
      } else {
        console.log('Erreur lors de la suppression du défi:', data.message);
      }
    })
    .catch(error => {
      console.error('Erreur lors de la suppression du défi:', error);
    });
}

function renderChallenges(challenges) {
  challengesList.innerHTML = '';

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

    const userId = localStorage.getItem('userId');
    if (userId && userId === challenge.userId) {
      listItem.querySelector('.delete-button').addEventListener('click', () => {
        const challengeId = challenge.challengeId;
        deleteChallenge(challengeId);
      });
    } else {
      listItem.querySelector('.delete-button').style.display = 'none';
    }

    challengesList.appendChild(listItem);
  });
}

function fetchChallenges() {
  fetch('http://localhost:5000/all-challenges')
    .then(response => response.json())
    .then(data => {
      renderChallenges(data.challenges);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des challenges:', error);
    });
}

createChallengeForm.addEventListener('submit', createChallenge);

fetchChallenges();
