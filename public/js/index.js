const promptInput = document.querySelector("#promptInput");
const resultImg = document.querySelector("#resultImg");
const resultPrompt = document.querySelector("#resultPrompt");
const resultUser = document.querySelector("#resultUser");
const resultDate = document.querySelector("#resultDate");
const resultShareIcon = document.querySelector("#resultShareIcon");
const resultDl = document.querySelector("#resultDl");
const resultModal = new bootstrap.Modal(
  document.querySelector("#resultModal"),
  { keyboard: false }
);
const errModal = new bootstrap.Modal(document.querySelector("#errModal"), {
  keyboard: false,
});
// TODO assign these to lets to using session data
// let user_name = String;
// let date_created = String;
let imageURL = String;
let promptValue = String;
let isPrivate = Boolean;
imageURL = "./assets/1024x1024.png";
isPrivate = true;
console.log("index.js");

// Hide spinner
document
  .querySelector("#spinner")
  .setAttribute("class", "spinner-border text-warning d-none");
console.log("hiding spinner");

function onSubmit(event) {
  event.preventDefault();
  console.log("onSubmit go");
  promptValue = promptInput.value;
  console.log(promptValue);
  // If nothing is added then an alert pops up
  if (promptValue === "") {
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
    console.log("showing spinner");
    const response = await fetch("/api/generateimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: promptValue,
      }),
    });

    if (!response.ok) {
      document
        .querySelector("#spinner")
        .setAttribute("class", "spinner-border text-warning d-none");
      console.log("hiding spinner");
      throw new Error("405, that image could not be generated");
    }
    const data = await response.json();
    console.log("data, ", data);
    imageURL = data.data;
    document.querySelector("#resultImg").src = imageURL;

    configModal();
    beginModal();
  } catch (error) {
    beginErrModal(error);
  }
}

// config Modal
function configModal() {
  console.log("configModal go");
  // set modal content from API response and session data
  resultImg.setAttribute("src", imageURL);
  resultDl.setAttribute("href", imageURL);
  resultPrompt.textContent = promptValue;
  // TODO get session data and store under 'resultUser'
  // resultUser.textContent = user_name;
  // console.log(user_name);
  // TODO get current date and store under 'resultDate'
  // resultDate.textContent = date_created;
}

// launch Modal
function beginModal() {
  console.log("beginModal go");
  resultModal.show();
  document
    .querySelector("#spinner")
    .setAttribute("class", "spinner-border text-warning d-none");
  console.log("hiding spinner");
}

// toggle isPrivate
function publishBtn() {
  if (isPrivate) {
    isPrivate = false;
    resultShareIcon.setAttribute("class", "bi bi-unlock-fill");
  } else {
    isPrivate = true;
    resultShareIcon.setAttribute("class", "bi bi-lock");
  }
  console.log("publish btn toggled, isPrivate = " + isPrivate);
}

// display error modal
function beginErrModal(error) {
  console.log("beginErrModal go");
  document.querySelector("#errModalSpan").textContent = error;
  errModal.show();
}

async function newImageHandler() {
  if (imageURL && promptValue) {
    const response = await fetch("/api/usergallery", {
      method: "POST",
      body: JSON.stringify({ imageURL, promptValue }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/userGallery");
    } else {
      alert("Failed to create image");
    }
    console.log(response);
  }
}

// TODO Send imageURL to SQL db
async function todb() {
  // user_name = req.session.user_name
  // try {
  //   const response = await fetch("/api/generateimage", {
  //     method: "POST",
  //     model: { Image },
  //     attributes: ["prompt", "user_name", "imageURL"],
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       promptValue,
  //       user_name,
  //       imageURL,
  //     }),
  //   });
  //   console.log(response);
  //   if (!response.ok) {
  //     throw new Error(
  //       "Could not send image to personal gallery. Please try again!"
  //     );
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
}

// For dev work on resultModal, you can uncomment the line below
//resultModal.show();

// Listens for submit event
document.querySelector("#submit").addEventListener("click", onSubmit);
document.querySelector("#resultShare").addEventListener("click", publishBtn);
document.querySelector("#resultSave").addEventListener("click", newImageHandler);