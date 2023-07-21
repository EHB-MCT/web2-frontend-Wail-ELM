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

  fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Connexion réussie') {
        displayFeedback('Connexion réussie !', 'success');
      } else {
        displayFeedback('Erreur lors de la connexion : ' + data.message, 'error');
      }
    })
    .catch(error => {
      console.error('Erreur lors de la connexion :', error);
      displayFeedback('Une erreur est survenue lors de la connexion', 'error');
    });
}

function displayFeedback(message, type) {
  const feedbackElement = document.getElementById('feedback');
  feedbackElement.textContent = message;
  feedbackElement.classList.remove('success', 'error');
  feedbackElement.classList.add(type);
}
