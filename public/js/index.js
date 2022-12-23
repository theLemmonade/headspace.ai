
function onSubmit(e) {
    e.preventdefault();


    // Gets data from form
    const prompt = document.querySelector('#prompt').value;

    // If nothing is added then an alert pops up
    if (prompt === '') {
        document.querySelector('#prompt').setAttribute('placeholder', 'Please add any text to generate an image with AI');
        return;
    }

    generateImageRequest(prompt);
}

// generateImageRequest function
async function generateImageRequest(prompt) {
    try {
        showAnimation();

        const response = await fetch('/api/generateImage', {
            method: 'Post',
            headers: {
                'Content-Type': 'application.json' 
            },
            body: JSON.stringify({
                prompt
            })
        });

        // Removes animation if img isn't generated
        if (!response.ok) {
            removeAnimation();
            throw new Error('That image could not be generated');
        }

        const data = await response.json();

        const imgURL = data.data;

        document.querySelector('#resultImg').src = imageURL;
        removeAnimation();
    } catch (error) {
        document.querySelector('#prompt').textContent = error;
    }
}

// -------------------------------------------------------------------
                        // ANIMATION SECTION
function showAnimation() {
    // Where you select the animation
    document.querySelector('').classList.add('show');
}
    // Removes animation
function removeAnimation() {
    document.querySelector('').classList.remove('show');
}
// -------------------------------------------------------------------

// Listens for submit event
document.querySelector('#promptEl').addEventListener('submit', onSubmit)