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
const logUser = document.querySelector("#logUser");
const logPass = document.querySelector("#logPass");
const logBtn = document.querySelector("#logBtn");

function showReg() {
	regNav.setAttribute("class", "nav-link active");
	regNav.setAttribute("aria-current", "true");
	regEl.setAttribute("style", "display: block;");
	logNav.setAttribute("class", "nav-link");
	logNav.setAttribute("aria-current", "false");
	logEl.setAttribute("style", "display: none;");
	console.log("display register");
}

function showLog() {
	regNav.setAttribute("class", "nav-link");
	regNav.setAttribute("aria-current", "false");
	regEl.setAttribute("style", "display: none;");
	logNav.setAttribute("class", "nav-link active");
	logNav.setAttribute("aria-current", "true");
	logEl.setAttribute("style", "display: block;");
	console.log("display login");
}

function register() {
	console.log("register go");
	// TODO register logic
}

function login() {
	console.log("login go");
	// TODO login logic
}

// Choose default:
showReg();
//showLog();

regNav.addEventListener("click", showReg);
toReg.addEventListener("click", showReg);
logNav.addEventListener("click", showLog);
toLog.addEventListener("click", showLog);
