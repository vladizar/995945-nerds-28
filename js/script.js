// POPUP

// Find all needed DOM elements
const popupFeedback = document.querySelector('.popup-feedback');
const popupFeedbackOpenButton = document.querySelector('.write-us');
const popupFeedbackCloseButton = popupFeedback.querySelector('.button-close');
const popupFeedbackForm = popupFeedback.querySelector('form');
const popupFeedbackFormInputs = popupFeedbackForm.querySelectorAll('input');
const popupFeedbackFormTextarea = popupFeedbackForm.querySelector('textarea');

// When user clicks on popup open button
popupFeedbackOpenButton.onclick = function (evt) 
{
    // Stop browser from following the link
    evt.preventDefault();

    // Show popup
    popupFeedback.classList.remove('hidden');
}

// When user clicks on popup close button
popupFeedbackCloseButton.onclick = function () 
{
    // Hide popup
    popupFeedback.classList.add('hidden');
}

// When user submits popup form
popupFeedbackForm.onsubmit = function (evt) 
{
    // Iterate over inputs in form
    for (const popupFeedbackFormInput of popupFeedbackFormInputs) 
    {
        // If any empty value
        if (!popupFeedbackFormInput.value || !popupFeedbackFormTextarea.value) 
        {
            // Stop browser from sending the form
            evt.preventDefault();
            
            // Show user error animation
            popupFeedback.classList.remove('popup-error');
            void popupFeedback.offsetWidth;
            popupFeedback.classList.add('popup-error');

            // Stop the loop
            break;
        }
    }
}

// If on index page
if (!document.querySelector('.logo').href) 
{
    // SLIDER

    // Find all needed DOM elements
    const sliderControls = document.querySelectorAll('.slider-control');
    const sliderPages = document.querySelectorAll('.slider-page');

    // Storage for current showing page number
    let currentPage = 0;

    // Iterate over slider controls
    for (let i = 0; i < sliderControls.length; i++) 
    {
        // When user clicks on slider control
        sliderControls[i].onclick = function () 
        {
            // Hide current active control activeness view
            sliderControls[currentPage].classList.remove('active-control');

            // Hide current showing slider page
            sliderPages[currentPage].classList.add('hidden');

            // Change current showing page number
            currentPage = i;

            // Show new active control
            this.classList.add('active-control');

            // Show new slider page
            sliderPages[currentPage].classList.remove('hidden');
        }
    }
}
