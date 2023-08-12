// document.getElementById('loginForm').addEventListener('submit', loginUser);

// function loginUser(e) {
//   e.preventDefault();

//   const email = document.getElementById('loginEmail').value;
//   const password = document.getElementById('loginPassword').value;

//   const loginData = {
//     email,
//     password
//   };

//   fetch('http://localhost:5000/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(loginData)
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (data.message === 'Connexion réussie') {
//         alert('Connexion réussie !');
//         // Rediriger vers une page protégée ou effectuer d'autres actions
//       } else {
//         alert('Erreur lors de la connexion : ' + data.message);
//       }
//     })
//     .catch(error => {
//       console.error('Erreur lors de la connexion :', error);
//       alert('Une erreur est survenue lors de la connexion');
//     });
// }


//  /                                    2IEME ///////////////////////////////////////////////////////////////////////////////////////


// function loginUser(e) {
//   e.preventDefault();

//   const email = document.getElementById('loginEmail').value;
//   const password = document.getElementById('loginPassword').value;

//   const loginData = {
//     email,
//     password
//   };

//   fetch('http://localhost:5000/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(loginData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.message === 'Connexion réussie') {
//         localStorage.setItem('userId', data.userId);
//         alert('Connexion réussie !');
//         // Rediriger vers une page protégée ou effectuer d'autres actions
//       } else {
//         alert('Erreur lors de la connexion : ' + data.message);
//       }
//     })
//     .catch(error => {
//       console.error('Erreur lors de la connexion :', error);
//       alert('Une erreur est survenue lors de la connexion');
//     });
// }



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