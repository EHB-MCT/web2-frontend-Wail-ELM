/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/register.js":
/*!*************************!*\
  !*** ./src/register.js ***!
  \*************************/
/***/ (() => {

eval("\r\n// function registerUser(e) {\r\n//   e.preventDefault();\r\n\r\n//   const username = document.getElementById('inputUsername').value;\r\n//   const email = document.getElementById('registerEmail').value;\r\n//   const password = document.getElementById('registerPassword').value;\r\n\r\n \r\n \r\n//   const userData = {\r\n//     username,\r\n//     email,\r\n//     password\r\n//   };\r\n\r\n//   fetch('http://localhost:5000/register', {\r\n//     method: 'POST',\r\n//     headers: {\r\n//       'Content-Type': 'application/json'\r\n//     },\r\n//     body: JSON.stringify(userData)\r\n//   })\r\n//     .then(response => response.json())\r\n//     .then(data => {\r\n//       if (data.message === 'Inscription réussie') {\r\n//         alert('Inscription réussie !');\r\n//       } else {\r\n//         alert('Erreur lors de l\\'inscription : ' + data.message);\r\n//       }\r\n//     })\r\n//     .catch(error => {\r\n//       console.error('Erreur lors de l\\'inscription :', error);\r\n//       alert('Une erreur est survenue lors de l\\'inscription');\r\n//     });\r\n// }\r\n\r\n\r\ndocument.getElementById('registerForm').addEventListener('submit', registerUser);\r\n\r\n\r\nfunction registerUser(e) {\r\n  e.preventDefault();\r\n\r\n  const username = document.getElementById('inputUsername').value;\r\n  const email = document.getElementById('registerEmail').value;\r\n  const password = document.getElementById('registerPassword').value;\r\n  const repeatPassword = document.getElementById('registerPassword2').value;\r\n\r\n\r\n  if (password !== repeatPassword) {\r\n    displayFeedback('Les mots de passe ne correspondent pas', 'error');\r\n    return;\r\n  }\r\n\r\n  const userData = {\r\n    username,\r\n    email,\r\n    password\r\n  };\r\n\r\n  fetch('http://localhost:5000/register', {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json'\r\n    },\r\n    body: JSON.stringify(userData)\r\n  })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n      if (data.message === 'Successful registration') {\r\n        localStorage.setItem('userId', data.userId);\r\n        displayFeedback('Successful registration !', 'success');\r\n      } else {\r\n        displayFeedback('Error when registering : ' + data.message);\r\n      }\r\n    })\r\n    .catch(error => {\r\n      console.error('Error when registering :', error);\r\n      displayFeedback('Error when registering');\r\n    });\r\n}\r\n\r\nfunction displayFeedback(message, type) {\r\n  const feedbackElement = document.getElementById('feedback');\r\n  feedbackElement.textContent = message;\r\n  feedbackElement.classList.remove('success', 'error');\r\n  feedbackElement.classList.add(type);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://web2-frontend-wail-elm/./src/register.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/register.js"]();
/******/ 	
/******/ })()
;