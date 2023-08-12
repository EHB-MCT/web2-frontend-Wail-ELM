


document.getElementById('registerForm').addEventListener('submit', registerUser);


function registerUser(e) {
  e.preventDefault();

  const username = document.getElementById('inputUsername').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const repeatPassword = document.getElementById('registerPassword2').value;


  if (password !== repeatPassword) {
    displayFeedback('Passwords not matching', 'error');
    return;
  }

  const userData = {
    username,
    email,
    password
  };




  fetch('https://hosting-backend-web-2-august-wail-el.onrender.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Successful registration') {
        localStorage.setItem('userId', data.userId);
        displayFeedback('Successful registration !', 'success');
      } else {
        displayFeedback('Error when registering : ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error when registering :', error);
      displayFeedback('Error when registering');
    });
}

function displayFeedback(message, type) {
  const feedbackElement = document.getElementById('feedback');
  feedbackElement.textContent = message;
  feedbackElement.classList.remove('success', 'error');
  feedbackElement.classList.add(type);
}