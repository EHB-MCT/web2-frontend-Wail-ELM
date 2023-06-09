async function getAllChallenges() {
    try {
        const response = await fetch('http://localhost:5000/all-challenges');
        const {
            challenges
        } = await response.json();

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

    const textElement = document.createElement('h1');
    textElement.textContent = `${challenge.text}`;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${challenge.description}`;

    const datasetElement = document.createElement('p');
    datasetElement.textContent = `Dataset: ${challenge.dataset}`;

    const pictureElement = document.createElement('img');
    pictureElement.src = challenge.picture;
    pictureElement.alt = 'Challenge Picture';

    const resultElement = document.createElement('p');
    resultElement.textContent = `Result: ${challenge.result}`;

    const playButton = document.createElement('button');
    playButton.textContent = 'Play';
    playButton.addEventListener('click', () => {
        playChallenge(challenge.challengeId);
    });

    challengeElement.appendChild(pictureElement);
    challengeElement.appendChild(textElement);
    challengeElement.appendChild(descriptionElement);
    challengeElement.appendChild(datasetElement);
    challengeElement.appendChild(resultElement);
    challengeElement.appendChild(playButton);

    return challengeElement;
}





// async function createChallenge(event) {
//     event.preventDefault();

//     const text = document.getElementById('text').value;
//     const description = document.getElementById('description').value;
//     const dataset = document.getElementById('dataset').value;
//     const picture = document.getElementById('picture').value;
//     const result = document.getElementById('result').value;

//     const userId = localStorage.getItem('userId');
//     if (!userId) {
//         console.log('Connectez-vous d\'abord');
//         return;
//     }

//     const challengeData = {
//         text,
//         description,
//         dataset,
//         picture,
//         result,
//         userId
//     };

//     try {
//         const response = await fetch('http://localhost:5000/newChallenges', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(challengeData)
//         });

//         const {
//             message,
//             challengeId
//         } = await response.json();

//         if (response.ok) {
//             alert(`${message} Challenge ID: ${challengeId}`);
//             const currentChallengeIds = JSON.parse(localStorage.getItem('currentChallengeIds')) || [];
//             currentChallengeIds.push(challengeId);
//             localStorage.setItem('currentChallengeIds', JSON.stringify(currentChallengeIds));
//             document.getElementById('create-challenge-form').reset();
//             getAllChallenges();
//         } else {
//             alert(message);
//         }
//     } catch (error) {
//         console.error('Erreur lors de la création du défi:', error);
//         alert('Une erreur est survenue lors de la création du défi');
//     }
// }


// Fonction pour créer un nouveau défi


async function createChallenge(event) {
    event.preventDefault();

    const text = document.getElementById('text').value;
    const description = document.getElementById('description').value;
    const dataset = document.getElementById('dataset').value;
    const pictureQuery = document.getElementById('picture').value;
    const result = document.getElementById('result').value;

    const userId = localStorage.getItem('userId');
    if (!userId) {
        console.log('Connectez-vous d\'abord');
        return;
    }

    try {
        const unsplashResponse = await fetch(`https://api.unsplash.com/photos/random?query=${pictureQuery}&client_id=fr0uKpERiV1VDzhrSbC6Tv5LuFzNL0eQduOaYUmXBN0`);
        const unsplashData = await unsplashResponse.json();

        if (unsplashResponse.ok) {
            const picture = unsplashData.urls.regular;
            const altDescription = unsplashData.alt_description;

            const challengeData = {
                text,
                description,
                dataset,
                picture,
                altDescription,
                result,
                userId
            };

            const response = await fetch('http://localhost:5000/newChallenges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(challengeData)
            });

            const {
                message,
                challengeId
            } = await response.json();

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
        } else {
            alert('Error fetching api Unplaash');
        }
    } catch (error) {
        console.error('Erreur lors de la création du défi:', error);
        alert('Une erreur est survenue lors de la création du défi');
    }
}


async function getMyChallenges(userId) {
    try {
        const response = await fetch(`http://localhost:5000/my-challenges?userId=${userId}`);
        const {
            challenges
        } = await response.json();

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

        const {
            message
        } = await response.json();

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