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

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ (() => {

eval("// document.getElementById('loginForm').addEventListener('submit', loginUser);\r\n\r\n// function loginUser(e) {\r\n//   e.preventDefault();\r\n\r\n//   const email = document.getElementById('loginEmail').value;\r\n//   const password = document.getElementById('loginPassword').value;\r\n\r\n//   const loginData = {\r\n//     email,\r\n//     password\r\n//   };\r\n\r\n//   fetch('http://localhost:5000/login', {\r\n//     method: 'POST',\r\n//     headers: {\r\n//       'Content-Type': 'application/json'\r\n//     },\r\n//     body: JSON.stringify(loginData)\r\n//   })\r\n//     .then(response => response.json())\r\n//     .then(data => {\r\n//       if (data.message === 'Connexion réussie') {\r\n//         alert('Connexion réussie !');\r\n//         // Rediriger vers une page protégée ou effectuer d'autres actions\r\n//       } else {\r\n//         alert('Erreur lors de la connexion : ' + data.message);\r\n//       }\r\n//     })\r\n//     .catch(error => {\r\n//       console.error('Erreur lors de la connexion :', error);\r\n//       alert('Une erreur est survenue lors de la connexion');\r\n//     });\r\n// }\r\n\r\n\r\n//  /                                    2IEME ///////////////////////////////////////////////////////////////////////////////////////\r\n\r\n\r\n// function loginUser(e) {\r\n//   e.preventDefault();\r\n\r\n//   const email = document.getElementById('loginEmail').value;\r\n//   const password = document.getElementById('loginPassword').value;\r\n\r\n//   const loginData = {\r\n//     email,\r\n//     password\r\n//   };\r\n\r\n//   fetch('http://localhost:5000/login', {\r\n//       method: 'POST',\r\n//       headers: {\r\n//         'Content-Type': 'application/json'\r\n//       },\r\n//       body: JSON.stringify(loginData)\r\n//     })\r\n//     .then(response => response.json())\r\n//     .then(data => {\r\n//       if (data.message === 'Connexion réussie') {\r\n//         localStorage.setItem('userId', data.userId);\r\n//         alert('Connexion réussie !');\r\n//         // Rediriger vers une page protégée ou effectuer d'autres actions\r\n//       } else {\r\n//         alert('Erreur lors de la connexion : ' + data.message);\r\n//       }\r\n//     })\r\n//     .catch(error => {\r\n//       console.error('Erreur lors de la connexion :', error);\r\n//       alert('Une erreur est survenue lors de la connexion');\r\n//     });\r\n// }\r\n\r\n\r\n\r\ndocument.getElementById('loginForm').addEventListener('submit', loginUser);\r\ndocument.getElementById('loginForm').addEventListener('submit', loginUser);\r\n\r\nfunction loginUser(e) {\r\n  e.preventDefault();\r\n\r\n  const email = document.getElementById('loginEmail').value;\r\n  const password = document.getElementById('loginPassword').value;\r\n\r\n  const loginData = {\r\n    email,\r\n    password\r\n  };\r\n\r\n  fetch('http://localhost:5000/login', {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json'\r\n      },\r\n      body: JSON.stringify(loginData)\r\n    })\r\n    .then(response => response.json())\r\n    .then(data => {\r\n      if (data.message === 'Successful connection') {\r\n        displayFeedback('Successful connection !', 'success');\r\n      } else {\r\n        displayFeedback('Error when connecting : ' + data.message, 'error');\r\n      }\r\n    })\r\n    .catch(error => {\r\n      console.error('Error while connecting :', error);\r\n      displayFeedback('Error while connecting', 'error');\r\n    });\r\n}\r\n\r\nfunction displayFeedback(message, type) {\r\n  const feedbackElement = document.getElementById('feedback');\r\n  feedbackElement.textContent = message;\r\n  feedbackElement.classList.remove('success', 'error');\r\n  feedbackElement.classList.add(type);\r\n}\r\n\n\n//# sourceURL=webpack://web2-frontend-wail-elm/./src/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/login.js"]();
/******/ 	
/******/ })()
;