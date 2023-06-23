let currentImage = 1;
const totalImages = 56;
const flipbook = document.getElementById('flipbook');
const textElement = document.getElementById('text');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Placeholder for the text corresponding to each image
const imageTexts = [
    "Press the watch icon",
    "Press the watch icon",
    "Press on set up for family memember, since we are setting the watch up for your child",
    "Continue",
    "Press continue, or press the 'Learn more' button to read the Data&Privacy policy",
    "Continue",
    "Hold up the camera to scan the apple watch face",
    "Scan the face of the watch",
    "Select the wrist preference",
    "Read and agree to the terms and conditions",
    "Select the watch text size",
    "Press create a passcode",
    "Enter a passcode on the watch",
    "Create new apple ID if your child doens't already have one",
    "Enter the child's name and birthday",
    "Verify you are an adult with the a credit card",
    "Enter the credit card information, nothing will be charged",
    "Create an apple ID email for your child",
    "Create a password for your child's apple ID",
    "We recomend you to press 'Turn On Ask to Buy'",
    "You can share your location if you chose to do so",
    "Press Set Up Cellular",
    "In the C-Spire portal enter your username and password for the C-Spire account",
    "Press Activate a new watch",
    "Select the plan and press continue",
    "Read over the terms and conditions then check accept and press agree",
    "Press Save",
    "Press Done",
    "Press Done",
    "We recomend you to 'Enable Location Services'",
    "Press Use Siri",
    "Select the voice for Siri",
    "Decide if you want to share the Wach Analytics with Apple",
    "Decide whether you want to set up Apple Cash Family",
    "Enable the messages in iCloud",
    "Request the heath data",
    "Go to the watch and press share",
    "Press continue",
    "Add emergency contacts",
    "Set up an emericy medical ID",
    "Fill out all the fields",
    "Select share the Medical ID Information in case of an emergency",
    "Fill out the fields",
    "Set up Activity or Skip this step",
    "Choose whether you want to enable route tracking",
    "Choose an Album for the photos if you want to",
    "Set up the contact card for the child",
    "Check the fields and press done",
    "Add contacts to the watch",
    "Set a screen time for the watch",
    "Create the passcode",
    "Continue",
    "Turn on Schooltime for when the child is in school",
    "Customise the time",
    "Select whether you want Grid View or List View and press continue",
    "Your childs apple watch is ready to go!",
    "Done"


];

function changeImage() {
    flipbook.querySelector('img').src = `docum/${currentImage}.jpg`;
    textElement.textContent = imageTexts[currentImage];
}

function nextImage() {
    currentImage++;
    if (currentImage > totalImages) {
        currentImage = 1;
        imageTexts[currentImage] = imageTexts[currentImage - 1];
    }
    changeImage();
}

function prevImage() {
    currentImage--;
    if (currentImage < 1) {
        currentImage = totalImages;
    }
    changeImage();
}

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'ArrowLeft') {
        prevImage();
    }
});

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);