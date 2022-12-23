document.querySelector("#spinner").setAttribute("class", "spinner-border text-warning d-none");
const promptInput = document.querySelector("#promptInput");
const resultImg = document.querySelector("#resultImg");
const resultPrompt = document.querySelector("#resultPrompt");
const resultUser = document.querySelector("#resultUser");
const resultDate = document.querySelector("#resultDate");
const resultShareIcon = document.querySelector("#resultShareIcon");
const resultModal = new bootstrap.Modal(document.querySelector("#resultModal"),{ keyboard: false });
const errModal = new bootstrap.Modal(document.querySelector("#errModal"),{keyboard: false,});
let imageURL = String;
let promptValue = String;
let isPrivate = Boolean;
imageURL = "./assets/1024x1024.png";
isPrivate = true;

function onSubmit(event) {
	event.preventDefault();
	console.log("onSubmit go");
	promptValue = promptInput.value;
	console.log(promptValue);
	// If nothing is added then an alert pops up
	if (promptValue === " ") {
		document
			.querySelector("#promptInput")
			.setAttribute(
				"placeholder",
				"Do androids dream of electric sheep? Please enter any text here."
			);
		return;
	}
	generateImageRequest(promptValue);
}

// generateImageRequest function
async function generateImageRequest() {
	console.log("generateImageRequest go");
	try {
		document
			.querySelector("#spinner")
			.setAttribute("class", "spinner-border text-warning");
		const response = await fetch("/api/generateImage", {
			method: "Post",
			headers: {
				"Content-Type": "application.json",
			},
			body: JSON.stringify({
				promptValue,
			}),
		});

		if (!response.ok) {
			document
				.querySelector("#spinner")
				.setAttribute("class", "spinner-border text-warning d-none");
			throw new Error("405, that image could not be generated");
		}
		const data = await response.json();
		imageURL = data.data;
		document.querySelector("#resultImg").src = imageURL;
		todb();
		configModal();
		beginModal();
	} catch (error) {
		beginErrModal(error);
	}
}

// Config Modal
function configModal() {
	console.log("configModal go");
	resultImg.setAttribute("src", imageURL);
	resultPrompt.textContent = promptValue;
	resultUser.textContent = "current user, TODO: get from session data";
	resultDate.textContent = "current date";
}

// Launch Modal
function beginModal() {
	console.log("beginModal go");
	resultModal.show();
	document
		.querySelector("#spinner")
		.setAttribute("class", "spinner-border text-warning d-none");
}

function publishBtn() {
	if (isPrivate) {
		isPrivate = false;
		resultShareIcon.setAttribute("class", "bi bi-unlock-fill");
	} else {
		isPrivate = true;
		resultShareIcon.setAttribute("class", "bi bi-lock");
	}
	console.log("isPrivate is set to " + isPrivate);
}

// TODO Create error pop-up mini modal
function beginErrModal(error) {
	console.log("beginErrModal go");
	document.querySelector("#errModalSpan").textContent = error;
	errModal.show();
}

// TODO Send imageURL to SQL db
function todb() {
	console.log("todb go");
	if (!isPrivate) {
		console.log("adding to public gallery");
	}
}

// Listens for submit event
document.querySelector("#submit").addEventListener("click", onSubmit);
document.querySelector("#resultShare").addEventListener("click", publishBtn);
document.querySelector("#resultSave").addEventListener("click", todb);
