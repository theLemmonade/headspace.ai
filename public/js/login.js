// const { json } = require("sequelize/types");

const regNav = document.querySelector("#regNav");
const regEl = document.querySelector("#regEl");
const toReg = document.querySelector("#toReg");
const regUser = document.querySelector("#regUser");
const regEmail = document.querySelector("#regEmail");
const regPass = document.querySelector("#regPass");
const regBtn = document.querySelector("#regBtn");
const logNav = document.querySelector("#logNav");
const logEl = document.querySelector("#logEl");
const toLog = document.querySelector("#toLog");
const logEmail = document.querySelector("#logEmail");
const logPass = document.querySelector("#logPass");
const logBtn = document.querySelector("#logBtn");


// show the register section
function showReg() {
	regNav.setAttribute("class", "nav-link active");
	regNav.setAttribute("aria-current", "true");
	regEl.setAttribute("style", "display: block;");
	logNav.setAttribute("class", "nav-link");
	logNav.setAttribute("aria-current", "false");
	logEl.setAttribute("style", "display: none;");
	console.log("display register");
}

// show the login section
function showLog() {
	regNav.setAttribute("class", "nav-link");
	regNav.setAttribute("aria-current", "false");
	regEl.setAttribute("style", "display: none;");
	logNav.setAttribute("class", "nav-link active");
	logNav.setAttribute("aria-current", "true");
	logEl.setAttribute("style", "display: block;");
	console.log("display login");
}

// Choose a default section, and display it
showLog();

const loginFormHandler = async (event) => {
	event.preventDefault();

	// Collect values from the login form
	const email = logEmail.value.trim();
	const password = logPass.value.trim();

	if (email && password) {
		// Send a POST request to the API endpoint
		const response = await fetch("/api/users/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			// If successful, redirect the browser to the profile page
			document.location.replace("/");
		} else {
			alert(response.statusText);
		}
	}
};

const signupFormHandler = async (event) => {
	event.preventDefault();

	// Collect values from the register form
	const user_name = regUser.value.trim();
	const email = regEmail.value.trim();
	const password = regPass.value.trim();

	if (user_name && email && password) {
		// Send a POST request to the API endpoint
		const response = await fetch("/api/users/register", {
			method: "POST",
			body: JSON.stringify({ user_name, email, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			// If successful, redirect the browser to the landing page
			document.location.replace("/");
		} else {
			alert(response.statusText);
		}
	}
};

logBtn.addEventListener("click", loginFormHandler);
regBtn.addEventListener("click", signupFormHandler);
toReg.addEventListener("click", showReg);
regNav.addEventListener("click", showReg);
toLog.addEventListener("click", showLog);
logNav.addEventListener("click", showLog);