// document.addEventListener('DOMContentLoaded', async () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const challengeId = urlParams.get('challengeId');

//     if (challengeId) {
//         try {
//             const response = await fetch(`https://hosting-backend-web-2-august-wail-el.onrender.com/challenges/${challengeId}`);
//             const challenge = await response.json();

//             const challengeDescription = document.getElementById('challenge-description');
//             const challengeImage = document.getElementById('challenge-image');
//             const challengeDataset = document.getElementById('challenge-dataset');
//             const resultInput = document.getElementById('result-input');
//             const submitResultButton = document.getElementById('submit-result');
//             const resultMessage = document.getElementById('result-message');

//             challengeDescription.textContent = `Description: ${challenge.description}`;
//             challengeImage.src = challenge.picture;
//             challengeDataset.textContent = `Dataset: ${challenge.dataset}`;

//             submitResultButton.addEventListener('click', async () => {
//                 const result = resultInput.value;
//                 try {
//                     const resultResponse = await fetch(`https://hosting-backend-web-2-august-wail-el.onrender.com/PlayChallenge/${challengeId}`, {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             result
//                         })
//                     });

//                     const {
//                         message
//                     } = await resultResponse.json();
//                     if (resultResponse.ok) {
//                         resultMessage.textContent = message;
//                         resultMessage.classList.remove('red');
//                         resultMessage.classList.add('green');
//                     } else {
//                         resultMessage.textContent = 'Challenge failed';
//                         resultMessage.classList.remove('green');
//                         resultMessage.classList.add('red');
//                     }
//                 } catch (error) {
//                     console.error('Error submitting result:', error);
//                     console.log('An error occurred while submitting the result');
//                 }
//             });

//         } catch (error) {
//             console.error('Error fetching challenge details:', error);
//             console.log('An error occurred while fetching challenge details');
//         }
//     } else {
//         console.error('Challenge ID not provided');
//         console.log('Challenge ID not provided');
//     }

//     const backButton = document.getElementById('back-button');
//     backButton.addEventListener('click', () => {
//         window.location.href = 'index.html';
//     });

// });



document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const challengeId = urlParams.get('challengeId');

    if (challengeId) {
        try {
            const response = await fetch(`https://hosting-backend-web-2-august-wail-el.onrender.com/challenges/${challengeId}`);
            const challenge = await response.json();

            const challengeDescription = document.getElementById('challenge-description');
            const challengeImage = document.getElementById('challenge-image');
            const challengeDataset = document.getElementById('challenge-dataset');
            const resultInput = document.getElementById('result-input');
            const submitResultButton = document.getElementById('submit-result');
            const resultMessage = document.getElementById('result-message');

            challengeDescription.textContent = `Description: ${challenge.description}`;
            challengeImage.src = challenge.picture;
            
            const formattedDataset = JSON.stringify(challenge.dataset, null, 2);
            challengeDataset.textContent = `Dataset: ${formattedDataset}`;

            submitResultButton.addEventListener('click', async () => {
                const result = resultInput.value;
                try {
                    const resultResponse = await fetch(`https://hosting-backend-web-2-august-wail-el.onrender.com/PlayChallenge/${challengeId}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            result
                        })
                    });

                    const {
                        message
                    } = await resultResponse.json();
                    if (resultResponse.ok) {
                        resultMessage.textContent = message;
                        resultMessage.classList.remove('red');
                        resultMessage.classList.add('green');
                    } else {
                        resultMessage.textContent = 'Challenge failed';
                        resultMessage.classList.remove('green');
                        resultMessage.classList.add('red');
                    }
                } catch (error) {
                    console.error('Error submitting result:', error);
                    console.log('An error occurred while submitting the result');
                }
            });

        } catch (error) {
            console.error('Error fetching challenge details:', error);
            console.log('An error occurred while fetching challenge details');
        }
    } else {
        console.error('Challenge ID not provided');
        console.log('Challenge ID not provided');
    }

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

});
