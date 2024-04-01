let NameInput = document.querySelector('#name');
let titleInput = document.querySelector('#title');
let contentInput = document.querySelector('#content');
let submitButton = document.querySelector('#submit');

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Save data as an object
    let data = {
        name: NameInput.value,
        title: titleInput.value,
        content: contentInput.value
    };

    // Clear the form inputs after submission
    NameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';

    // Store the data object in localStorage
    localStorage.setItem('formData', JSON.stringify(data));

     // Redirect to the component-form.html page after form submission
    window.location.href = 'component-form.html';

    // Optionally, you can redirect to another page or show a success message
    // window.location.href = 'success.html';
    // alert('Form submitted successfully!');
}

// Event listener for form submission
submitButton.addEventListener('click', handleFormSubmit);

function renderLastRegistered() {
    let formData = JSON.parse(localStorage.getItem('formData'));

    // Check if formData exists and update the form inputs with the data
    if (formData) {
        NameInput.value = formData.name;
        titleInput.value = formData.title;
        contentInput.value = formData.content;
    }

    // Clear localStorage data to ensure the form fields are empty on page refresh
    localStorage.removeItem('formData');
}

