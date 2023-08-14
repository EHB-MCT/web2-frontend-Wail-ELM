

document.getElementById('loginForm').addEventListener('submit', loginUser);
document.getElementById('loginForm').addEventListener('submit', loginUser);

function loginUser(e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const loginData = {
    email,
    password
  };

  fetch('https://hosting-backend-web-2-august-wail-el.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Successful connection') {
        
        displayFeedback('Successful connection !', 'success');
      } else {
        displayFeedback('Error when connecting : ' + data.message, 'error');
      }
    })
    .catch(error => {
      console.error('Error while connecting :', error);
      displayFeedback('Error while connecting', error);
    });
}

function displayFeedback(message, type) {
  const feedbackElement = document.getElementById('feedback');
  feedbackElement.textContent = message;
  feedbackElement.classList.remove('success', 'error');
  feedbackElement.classList.add(type);
}