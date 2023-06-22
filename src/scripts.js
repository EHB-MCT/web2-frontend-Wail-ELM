// async function getAllChallenges() {
//     const response = await fetch('http://localhost:5000/all-challenges');
//     const { challenges } = await response.json();

//     const challengesList = document.getElementById('challenges-list');
//     challengesList.innerHTML = '';

//     challenges.forEach(challenge => {
//       const challengeElement = document.createElement('div');
//       challengeElement.classList.add('challenge');

//       const textElement = document.createElement('p');
//       textElement.textContent = `Text: ${challenge.text}`;

//       const descriptionElement = document.createElement('p');
//       descriptionElement.textContent = `Description: ${challenge.description}`;

//       const datasetElement = document.createElement('p');
//       datasetElement.textContent = `Dataset: ${challenge.dataset}`;

//       const pictureElement = document.createElement('img');
//       pictureElement.src = challenge.picture;
//       pictureElement.alt = 'Challenge Picture';

//       const resultElement = document.createElement('p');
//       resultElement.textContent = `Result: ${challenge.result}`;

//       challengeElement.appendChild(textElement);
//       challengeElement.appendChild(descriptionElement);
//       challengeElement.appendChild(datasetElement);
//       challengeElement.appendChild(pictureElement);
//       challengeElement.appendChild(resultElement);

//       challengesList.appendChild(challengeElement);
//     });
//   }

//   // Fonction pour créer un nouveau challenge
//  // Fonction pour créer un nouveau challenge
// async function createChallenge(event) {
//     event.preventDefault();

//     const text = document.getElementById('text').value;
//     const description = document.getElementById('description').value;
//     const dataset = document.getElementById('dataset').value;
//     const picture = document.getElementById('picture').value;
//     const result = document.getElementById('result').value;

//     const userId = localStorage.getItem('userId');
//     if (!userId) {
//       console.log('Connectez-vous d\'abord');
//       return;
//     }

//     const challengeData = {
//       text,
//       description,
//       dataset,
//       picture,
//       result,
//       userId
//     };

//     const response = await fetch('http://localhost:5000/newChallenges', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(challengeData)
//     });

//     const { message, challengeId } = await response.json();

//     if (response.ok) {
//       alert(`${message} Challenge ID: ${challengeId}`);
//       document.getElementById('create-challenge-form').reset();
//     } else {
//       alert(message);
//     }
//   }


//   async function getMyChallenges(userId) {
//     const response = await fetch(`http://localhost:5000/my-challenges?userId=${userId}`);
//     const { challenges } = await response.json();

//     const myChallengesList = document.getElementById('my-challenges-list');
//     myChallengesList.innerHTML = '';

//     challenges.forEach(challenge => {
//       const challengeElement = document.createElement('div');
//       challengeElement.classList.add('challenge');

//       const textElement = document.createElement('p');
//       textElement.textContent = `Text: ${challenge.text}`;

//       const descriptionElement = document.createElement('p');
//       descriptionElement.textContent = `Description: ${challenge.description}`;

//       const datasetElement = document.createElement('p');
//       datasetElement.textContent = `Dataset: ${challenge.dataset}`;

//       const pictureElement = document.createElement('img');
//       pictureElement.src = challenge.picture;
//       pictureElement.alt = 'Challenge Picture';

//       const resultElement = document.createElement('p');
//       resultElement.textContent = `Result: ${challenge.result}`;

//       challengeElement.appendChild(textElement);
//       challengeElement.appendChild(descriptionElement);
//       challengeElement.appendChild(datasetElement);
//       challengeElement.appendChild(pictureElement);
//       challengeElement.appendChild(resultElement);

//       myChallengesList.appendChild(challengeElement);
//     });
//   }

//   document.addEventListener('DOMContentLoaded', getAllChallenges);
//   document.getElementById('create-challenge-form').addEventListener('submit', createChallenge);



async function getAllChallenges() {
    try {
      const response = await fetch('http://localhost:5000/all-challenges');
      const { challenges } = await response.json();
  
      const challengesList = document.getElementById('challenges-list');
      challengesList.innerHTML = '';
  
      challenges.forEach(challenge => {
        const challengeElement = createChallengeElement(challenge);
        challengesList.appendChild(challengeElement);
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des défis:', error);
      alert('Une erreur est survenue lors de la récupération des défis');
    }
  }
  
  function createChallengeElement(challenge) {
    const challengeElement = document.createElement('div');
    challengeElement.classList.add('challenge');
  
    const textElement = document.createElement('p');
    textElement.textContent = `Text: ${challenge.text}`;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${challenge.description}`;
  
    const datasetElement = document.createElement('p');
    datasetElement.textContent = `Dataset: ${challenge.dataset}`;
  
    const pictureElement = document.createElement('img');
    pictureElement.src = challenge.picture;
    pictureElement.alt = 'Challenge Picture';
  
    const resultElement = document.createElement('p');
    resultElement.textContent = `Result: ${challenge.result}`;
  
    challengeElement.appendChild(textElement);
    challengeElement.appendChild(descriptionElement);
    challengeElement.appendChild(datasetElement);
    challengeElement.appendChild(pictureElement);
    challengeElement.appendChild(resultElement);
  
    return challengeElement;
  }
  
  async function createChallenge(event) {
    event.preventDefault();
  
    const text = document.getElementById('text').value;
    const description = document.getElementById('description').value;
    const dataset = document.getElementById('dataset').value;
    const picture = document.getElementById('picture').value;
    const result = document.getElementById('result').value;
  
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.log('Connectez-vous d\'abord');
      return;
    }
  
    const challengeData = {
      text,
      description,
      dataset,
      picture,
      result,
      userId
    };
  
    try {
      const response = await fetch('http://localhost:5000/newChallenges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(challengeData)
      });
  
      const { message, challengeId } = await response.json();
  
      if (response.ok) {
        alert(`${message} Challenge ID: ${challengeId}`);
        const currentChallengeIds = JSON.parse(localStorage.getItem('currentChallengeIds')) || [];
        currentChallengeIds.push(challengeId);
        localStorage.setItem('currentChallengeIds', JSON.stringify(currentChallengeIds));
        document.getElementById('create-challenge-form').reset();
        getAllChallenges();
      } else {
        alert(message);
      }
    } catch (error) {
      console.error('Erreur lors de la création du défi:', error);
      alert('Une erreur est survenue lors de la création du défi');
    }
  }
  
  async function getMyChallenges(userId) {
    try {
      const response = await fetch(`http://localhost:5000/my-challenges?userId=${userId}`);
      const { challenges } = await response.json();
  
      const myChallengesList = document.getElementById('my-challenges-list');
      myChallengesList.innerHTML = '';
  
      challenges.forEach(challenge => {
        const challengeElement = createChallengeElement(challenge);
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          deleteChallenge(challenge.challengeId);
        });
  
        challengeElement.appendChild(deleteButton);
        myChallengesList.appendChild(challengeElement);
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des défis de l\'utilisateur:', error);
      alert('Une erreur est survenue lors de la récupération des défis de l\'utilisateur');
    }
  }
  
  async function deleteChallenge(challengeId) {
    try {
      const response = await fetch(`http://localhost:5000/deleteChallenge/${challengeId}`, {
        method: 'DELETE'
      });
  
      const { message } = await response.json();
  
      if (response.ok) {
        alert(message);
        const currentChallengeIds = JSON.parse(localStorage.getItem('currentChallengeIds')) || [];
        const updatedChallengeIds = currentChallengeIds.filter(id => id !== challengeId);
        localStorage.setItem('currentChallengeIds', JSON.stringify(updatedChallengeIds));
        const userId = localStorage.getItem('userId');
        if (userId) {
          getMyChallenges(userId);
        }
      } else {
        alert(message);
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du défi:', error);
      alert('Une erreur est survenue lors de la suppression du défi');
    }
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      getMyChallenges(userId);
    }
  
    const currentChallengeIds = JSON.parse(localStorage.getItem('currentChallengeIds')) || [];
    await Promise.all(
      currentChallengeIds.map(async challengeId => {
        const response = await fetch(`http://localhost:5000/challenges/${challengeId}`);
        const challenge = await response.json();
        const challengeElement = createChallengeElement(challenge);
        document.getElementById('challenges-list').appendChild(challengeElement);
      })
    );
  });
  
  document.getElementById('create-challenge-form').addEventListener('submit', createChallenge);
  