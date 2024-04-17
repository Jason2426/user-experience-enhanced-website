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
dateString = dateString.replace(' ', ', ') // Replace the space after the month with a comma and space

currentDateElement.textContent = dateString;


/* Client sided like button */
document.getElementById("likeBtn").addEventListener("click", async () => {
    // Get the post slug from the server side
    const postSlug = '<%= post[0].slug %>';

    try {
        // Send a POST request to the server to like the post
        const response = await fetch(`/detail/${postSlug}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ slug: postSlug })
        });

        // If the response is successful
        if (response.ok) {
            // Update the share count displayed on the client side
            const shareCountElement = document.getElementById("shareCount");
            shareCountElement.innerText = parseInt(shareCountElement.innerText) + 1;
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});



