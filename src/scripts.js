function displayFeedback(message, type) {
  const feedbackElement = document.getElementById('feedback');
  feedbackElement.textContent = message;
  feedbackElement.className = type;

  setTimeout(() => {
    feedbackElement.textContent = '';
    feedbackElement.className = '';
  }, 1000);
}

async function getAllChallenges() {

  // https://hosting-backend-web-2-august-wail-el.onrender.com
  try {
    const response = await fetch('https://hosting-backend-web-2-august-wail-el.onrender.com/all-challenges');
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
    console.log('Error when retrieving challenges:', error);
    console.log('Error when retrieving challenges');
  }
}

function createChallengeElement(challenge) {
  const challengeElement = document.createElement('div');
  challengeElement.classList.add('challenge');

  const textElement = document.createElement('h2');
  textElement.textContent = `${challenge.text}`;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = `${challenge.description}`;

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


async function playChallenge(challengeId) {
  try {
    const response = await fetch(`https://hosting-backend-web-2-august-wail-el.onrender.com/challenges/${challengeId}`);
    const challenge = await response.json();

    const challengePage = window.open('', '_blank');

    challengePage.document.write(`
            <html>
            <head>
                <title>Challenge Details</title>
                <style>
                h1 h2 h3 p{
                  font-family: 'Courier New', monospace;
                }
                
                .container {
                  max-width: 400px;
                  margin: 0 auto;
                  padding: 40px;
                  background-color: #ffffff;
                  border-radius: 5px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                
                
                form {
                  display: flex;
                  flex-direction: column;
                }
                
                input[type="text"],
                input[type="password"] {
                  width: 100%;
                  padding: 12px;
                  border: none;
                  border-radius: 3px;
                  margin-bottom: 20px;
                  background-color: #f9f9f9;
                  color: #333333;
                }
                
                input[type="submit"] {
                  width: 100%;
                  padding: 12px;
                  background-color: #428bca;
                  color: #ffffff;
                  border: none;
                  border-radius: 3px;
                  cursor: pointer;
                  transition: background-color 0.3s ease;
                }
                
                input[type="submit"]:hover {
                  background-color: #3071a9;
                }
                
                .error-message {
                  color: #ff0000;
                  margin-bottom: 10px;
                  font-size: 14px;
                }
                
                
                
                
                .navbar {
                  background-color: #000000;
                  display: flex;
                  justify-content: space-between;
                  padding: 20px;
                  margin-bottom : 4em;
                }
                
                .navbar a {
                  color: #ffffff;
                  text-decoration: none;
                  font-size: 16px;
                  margin-right: 20px;
                  transition: color 0.3s ease;
                }
                
                .navbar a:hover {
                  color: #00ff00;
                }
                
                .navbar {
                  font-family: 'Courier New', monospace;
                }
                
                .navbar a {
                  border-bottom: 2px solid #00ff00;
                  padding-bottom: 5px;
                }
                
                .navbar a:hover {
                  border-color: #ff00ff;
                }
                
                body{
                    text-align : center;
                }
                
                img{
                    width : 20%;
                    height : auto;
                }
                
                
                
                
                .navbar {
                  background-color: #000000;
                  display: flex;
                  justify-content: space-between;
                  padding: 20px;
                }
                
                .navbar a {
                  color: #ffffff;
                  text-decoration: none;
                  font-size: 16px;
                  margin-right: 20px;
                  transition: color 0.3s ease;
                }
                
                .navbar a:hover {
                  color: #00ff00;
                }
                
                .navbar {
                  font-family: 'Courier New', monospace;
                }
                
                .navbar a {
                  border-bottom: 2px solid #00ff00;
                  padding-bottom: 5px;
                }
                
                .navbar a:hover {
                  border-color: #ff00ff;
                }
                
                #loginForm,
                #registerForm {
                  max-width: 400px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #111;
                  border-radius: 8px;
                  font-family: 'Courier New', monospace;
                  color: #fff;
                }
                
                #loginForm h1,
                #registerForm h1 {
                  color: #00ff00;
                  text-align: center;
                  margin-bottom: 20px;
                }
                
                #loginForm label,
                #registerForm label {
                  font-size: 14px;
                  display: block;
                  margin-bottom: 5px;
                }
                
                #loginForm input[type="email"],
                #loginForm input[type="password"],
                #registerForm input[type="text"],
                #registerForm input[type="email"],
                #registerForm input[type="password"] {
                  width: 95%;
                  padding: 10px;
                  border: none;
                  background-color: #333;
                  color: #fff;
                  border-radius: 4px;
                }
                
                #loginForm button.register,
                #registerForm button.register {
                  display: block;
                  width: 100%;
                  padding: 10px;
                  background-color: #0f0f23;
                  border: none;
                  color: #fff;
                  font-size: 16px;
                  text-align: center;
                  cursor: pointer;
                  border-radius: 4px;
                }
                
                #loginForm button.register a,
                #registerForm button.register a {
                  color: #fff;
                  text-decoration: none;
                }
                
                                                                                  /* Challenges */
                /* .challenge {
                  background-color: #111;
                  padding: 10px;
                  margin-bottom: 20px;
                  border-radius: 8px;
                  color: #fff;
                }
                
                .challenge p {
                  margin-bottom: 10px;
                }
                
                .challenge img {
                  max-width: 100%;
                  border-radius: 4px;
                  margin-bottom: 10px;
                }
                
                .challenge button {
                  display: block;
                  width: 100%;
                  padding: 10px;
                  background-color: #0f0f23;
                  border: none;
                  color: #fff;
                  font-size: 16px;
                  text-align: center;
                  cursor: pointer;
                  border-radius: 4px;
                  margin-top: 10px;
                }
                
                 */
                
                 body {
                  background-color: #000;
                  color: #fff;
                  font-family: 'Courier New', Courier, monospace;
                
                }
                
                .container {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                }
                
                .challenge {
                  background-color: #222;
                  border-radius: 8px;
                  padding: 20px;
                  margin: 10px;
                  width: 300px;
                  text-align: center;
                }
                
                .challenge h1 {
                  text-align: center;
                  color: white;
                  font-weight: normal
                }
                
                .challenge img {
                  width: 100%;
                  height: auto;
                  border-radius: 8px;
                  margin-bottom: 10px;
                }
                
                .challenge h2 {
                  font-size: 20px;
                  margin-bottom: 10px;
                }
                
                .challenge p {
                  font-size: 14px;
                  margin-bottom: 10px;
                }
                
               button {
                  background-color: #00ff00;
                  color: black;
                  border: none;
                  border-radius: 4px;
                  padding: 10px 20px;
                  font-size: 16px;
                  cursor: pointer;
                  transition: background-color 0.3s;
                  font-family: 'Courier New', Courier, monospace;
                }
                button:hover {
                    background-color: purple;
                    transition: background-color 0.3s;
                    color: white;
                  }
                
               
                
                </style>
            </head>
            <body>
            <div class="navbar">
            <a href="/login.html">Login</a>
            <a href="/register.html">Register</a>
            <a href="/home.html">Home</a>
            <a href="/newChallenge.html">Create New Challenge</a>
            <a href="/myChallenges.html">My Challenges</a>
        </div>
        <button onclick="goBack()">Return</button>
                <h1>${challenge.text}</h1>
                <p>Description: ${challenge.description}</p>
                <p>Dataset: ${challenge.dataset}</p>
                <img src="${challenge.picture}" alt="Challenge Picture">
                <p>Result: ${challenge.result}</p>

                <h2>Your Solution</h2>
                <textarea id="solution-textarea" rows="4" cols="50"></textarea>
                <button onclick="submitSolution('${challengeId}')">Send</button>

                <script>
                function goBack() {
                    window.close();
                }
                    function submitSolution(challengeId) {
                        const solution = document.getElementById('solution-textarea').value;
                        displayFeedback('Bien joué');
                    }
                </script>
            </body>
            </html>
        `);

    challengePage.document.close();
  } catch (error) {
    console.error('Error when retrieving challenges:', error);
    displayFeedback('Error when retrieving challenges');
  }
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
    console.log('Log-in first !');
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

      const response = await fetch('https://hosting-backend-web-2-august-wail-el.onrender.com/newChallenges', {
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
        displayFeedback(`${message}`);
        const currentChallengeIds = JSON.parse(localStorage.getItem('currentChallengeIds')) || [];
        currentChallengeIds.push(challengeId);
        localStorage.setItem('currentChallengeIds', JSON.stringify(currentChallengeIds));
        document.getElementById('create-challenge-form').reset();
        getAllChallenges();
      } else {
        displayFeedback(message);
      }
    } else {
      displayFeedback('Error fetching api Unplaash');
    }
  } catch (error) {
    console.error('Error when retrieving challenges:', error);
    console.error('Error when retrieving challenges');
  }
}


async function getMyChallenges(userId) {
  try {
    const response = await fetch(`https://hosting-backend-web-2-august-wail-el.onrender.com/my-challenges?userId=${userId}`);
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
    console.log('Error when retrieving challenges of user:', error);
    console.log('Error when retrieving challenges of user');
  }
}

async function deleteChallenge(challengeId) {
  try {
    const response = await fetch(`https://hosting-backend-web-2-august-wail-el.onrender.com/deleteChallenge/${challengeId}`, {
      method: 'DELETE'
    });

    const {
      message
    } = await response.json();

    if (response.ok) {
      displayFeedback(message);
      const currentChallengeIds = JSON.parse(localStorage.getItem('currentChallengeIds')) || [];
      const updatedChallengeIds = currentChallengeIds.filter(id => id !== challengeId);
      localStorage.setItem('currentChallengeIds', JSON.stringify(updatedChallengeIds));
      const userId = localStorage.getItem('userId');
      if (userId) {
        getMyChallenges(userId);
      }
    } else {
      displayFeedback(message);
    }
  } catch (error) {
    console.error('Error deleting challenges:', error);
    displayFeedback('Error deleting this challenge');
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
      const response = await fetch(`https://hosting-backend-web-2-august-wail-el.onrender.com/challenges/${challengeId}`);
      const challenge = await response.json();
      const challengeElement = createChallengeElement(challenge);
      document.getElementById('challenges-list').appendChild(challengeElement);
    })
  );
});

document.getElementById('create-challenge-form').addEventListener('submit', createChallenge);