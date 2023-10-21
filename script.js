// Get the language select dropdown and elements that need translation
const languageSelect = document.getElementById("language-select");
const welcomeText = document.querySelector(".welcome-section h1");
const marqueeText = document.querySelector(".welcome-section marquee");
const navbarLinks = document.querySelectorAll(".navbar a");
const benefitsListItems = document.querySelectorAll(".benefits ul li");
const contactLink = document.querySelector(".contact-box");
const feedbackLink = document.querySelector(".feedback-box");
const rightsReservedText = document.querySelector(".rights-reserved p");

// Function to change content based on selected language
function changeLanguage() {
    const selectedLanguage = languageSelect.value;
    if (selectedLanguage === "mr") {
        // Change content to Marathi
        welcomeText.textContent = "आवरुळ डेयरीत स्वागत आहे";
        marqueeText.textContent = "उत्तम दुग्ध आणि दुग्ध उत्पादन, ताज्या आपल्या घरी पोहोचविणार!";
        navbarLinks[0].textContent = "होम";
        navbarLinks[1].textContent = "आमच्याबद्दल";
        navbarLinks[2].textContent = "सेवा";
        navbarLinks[3].textContent = "लॉगिन";
        benefitsListItems[0].textContent = "ताजा आणि शुद्ध दूध";
        benefitsListItems[1].textContent = "विविध दूध उत्पादन";
        benefitsListItems[2].textContent = "घरोघरी परिपूर्ण सेवा";
        benefitsListItems[3].textContent = "आरोग्यदायी आणि पौष्टिक पर्याय";
        contactLink.textContent = "आमसे संपर्क साधा";
        feedbackLink.textContent = "प्रतिसाद";
        rightsReservedText.textContent = "\u00A9 2023 आवरुळ डेयरी. सर्व हक्क राखीव.";
    } else {
        // Change content back to English or other languages if supported
        welcomeText.textContent = "Welcome to Awrul Dairy";
        marqueeText.textContent = "Quality Milk and Dairy Products Delivered Fresh to Your Doorstep!";
        navbarLinks[0].textContent = "Home";
        navbarLinks[1].textContent = "About Us";
        navbarLinks[2].textContent = "Services";
        navbarLinks[3].textContent = "Login";
        benefitsListItems[0].textContent = "Fresh and Pure Milk";
        benefitsListItems[1].textContent = "Wide Variety of Dairy Products";
        benefitsListItems[2].textContent = "Home Delivery Services";
        benefitsListItems[3].textContent = "Healthy and Nutritious Options";
        contactLink.textContent = "Contact Us";
        feedbackLink.textContent = "Feedback";
        rightsReservedText.textContent = "\u00A9 2023 Awrul Dairy. All Rights Reserved.";
    }
}

// Add event listener to the language select dropdown
languageSelect.addEventListener("change", changeLanguage);

const submenuOptions = document.querySelectorAll('.submenu p');

submenuOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Get the text content of the clicked option and navigate to the corresponding page
        const optionText = option.textContent.toLowerCase().trim();
        window.location.href = `${optionText}.html`;
    });
});
function displayIndianTime() {

    // Get current UTC time
    const customDateTime = new Date('2023-10-16T18:59:00');

    const currentTimeUTC = new Date();

    // Get the time zone offset in minutes
    const offsetIST =530; // IST is UTC+5:30

    // Calculate the IST time
    const currentISTTime = new Date(currentTimeUTC.getTime() + offsetIST * 60 * 1000);

    // Format the date and time in 24-hour clock format
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short'
    };

    // Convert IST time to a string using the specified format options
    const formattedISTTime = currentISTTime.toLocaleDateString('en-IN', options);

    // Display the formatted date and time in IST
    document.getElementById('indian-time').textContent = `Current Date and Time in IST: ${formattedISTTime}`;
}

// Call the function to display Indian Standard Time and update it every second
window.onload = function() {
    displayIndianTime();
    setInterval(displayIndianTime, 1000); // Update every second
};

// Assuming you have a variable `isLoggedIn` to track user login status (true if logged in, false otherwise)
const isLoggedIn = false; // Set it to true if the user is logged in

// Function to update the user section based on login status
function updateLoginStatus() {
    const userSection = document.querySelector('.user-section');
    const loginSignupBtn = document.getElementById('login-signup-btn');

    if (isLoggedIn) {
        // If the user is logged in, display the user logo (replace 'path_to_user_logo' with the actual path to your user logo image)
        const userLogo = document.createElement('img');
        userLogo.src = 'path_to_user_logo';
        userLogo.alt = 'User Logo';
        userSection.appendChild(userLogo);
        loginSignupBtn.style.display = 'none'; // Hide the login/signup button
    } else {
        // If the user is not logged in, display the login/signup button
        loginSignupBtn.style.display = 'block';
        userSection.innerHTML = ''; // Remove any existing user logo
    }
}

updateLoginStatus();

const instagramIcon = document.getElementById('instagram-icon');
const whatsappIcon = document.getElementById('whatsapp-icon');
const instagramPopup = document.getElementById('instagram-popup');
const whatsappPopup = document.getElementById('whatsapp-popup');

instagramIcon.addEventListener('click', () => {
    instagramPopup.style.display = 'flex';
});

whatsappIcon.addEventListener('click', () => {
    whatsappPopup.style.display = 'flex';
});

// Close pop-ups when clicking outside the pop-up content
window.addEventListener('click', (event) => {
    if (event.target === instagramPopup) {
        instagramPopup.style.display = 'none';
    }
    if (event.target === whatsappPopup) {
        whatsappPopup.style.display = 'none';
    }
});

