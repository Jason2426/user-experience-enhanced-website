/* Hamburger menu code*/

document.addEventListener("DOMContentLoaded", function () {

    const menuIcon = document.querySelector('.menu_icon');
    if (menuIcon) {
        const burgerMenu = document.querySelector('.burger_menu_window');
        const closeIcon = document.querySelector('.close_icon');

        menuIcon.addEventListener('click', function () {
            // Change translate position of menu icon
            menuIcon.style.transform = 'translateX(-200%)';
            // Show burger menu
            burgerMenu.style.transform = 'translateX(0)';
            // Hide menu icon
            menuIcon.hidden = true;
        });

        closeIcon.addEventListener('click', function () {
            // Change translate position of menu icon back to default
            menuIcon.style.transform = 'translateX(0)';
            // Hide burger menu
            burgerMenu.style.transform = 'translateX(-200%)';
            // Show menu icon
            menuIcon.hidden = false;
        });

    }
});

/* Current day and month code */

const currentDateElement = document.querySelector('.current-date');
const currentDate = new Date();
const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };

let dateString = currentDate.toLocaleDateString('nl-US', options);
dateString = dateString.replace(' ', ', ') 

currentDateElement.textContent = dateString;



/* Client sided like function */

// Add an event listener to the like button

const likeBtn = document.getElementById('likeBtn');

// If the likeBtn is found and excsisting execute the following code. Else display error.
if (likeBtn) {

    likeBtn.addEventListener("click", async (event) => {

        event.preventDefault();

        const likeIcon = document.getElementById('likeIcon');

        // Get the post slug from the hidden input field
        const postSlugInput = document.querySelector('input[name="slug"]');
        const postSlug = postSlugInput.value;

        try {
            // Send a POST request to the server to like the post
            const response = await fetch(`/detail/${postSlug}`, {
                method: 'POST',
                headers: {
                    // Setting the request header to specify JSON content
                    'Content-Type': 'application/json'
                },
                // Sending the post slug as JSON in the request body
                body: JSON.stringify({ slug: postSlug })
            });

            // If the response is successful 
            if (response.ok) {
                // Update the share count displayed on the client side
                const shareCountElement = document.getElementById("shareCount");
                // Incrementing the share count displayed on the client side
                shareCountElement.innerText = parseInt(shareCountElement.innerText) + 1;
                //Once the button is clicked disable it
                likeBtn.disabled = true;
                likeBtn.style.border = 'solid 1px #E84340';
                // Change the SVG fill color
                likeIcon.querySelector('path').setAttribute('fill', '#E84340');

            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
} else {
    console.error("LikeBtn not found.");
}


/* Text to Speech function */

const luisterBtn = document.querySelector('.listen-btn');

if (luisterBtn) {
luisterBtn.addEventListener('click', () => {
    const contentText = document.querySelector('.article-content').textContent;
    const speechSynthesis = window.speechSynthesis;
    const speechText = new SpeechSynthesisUtterance(contentText);
    speechText.lang = 'nl-NL';
    speechText.rate = 0.75;
    // speechText.volume = 0.75; 
    speechSynthesis.speak(speechText);
});
} else {
    console.error("luisterBtn not found.");
}

const luisterBtn = document.querySelector('.listen-btn');

if (luisterBtn) {
    luisterBtn.addEventListener('click', () => {
        const contentText = document.querySelector('.article-content');
        
        // Change the styling of the article content once the button is clicked
        luisterBtn.style.border = 'solid 1px green';
        // Add more styling changes as needed

        // Speech synthesis code remains unchanged
        const speechSynthesis = window.speechSynthesis;
        const speechText = new SpeechSynthesisUtterance(contentText.textContent);
        speechText.lang = 'nl-NL';
        speechText.rate = 0.75;
        // speechText.volume = 0.75; 
        speechSynthesis.speak(speechText);
    });
} else {
    console.error("luisterBtn not found.");
}



