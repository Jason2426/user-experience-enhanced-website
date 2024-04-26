// Import the npm package express from the node_modules map
import express from 'express'

// Import the fetchJson function from the ./helpers directory
import fetchJson from './helpers/fetch-json.js';

// Create a new express app
const app = express();

// Set ejs as the template engine
app.set('view engine', 'ejs');

// Make working with request data easier
app.use(express.urlencoded({ extended: true }));

// Set the directory for ejs templates
app.set('views', './views');

// Use the 'public' directory for static resources
app.use(express.static('public'));

// Set the basis endpoint
const apiUrl = 'https://redpers.nl/wp-json/wp/v2';
const redpers_post_url = 'https://redpers.nl/wp-json/wp/v2/posts'
const redpers_categories_url = 'https://redpers.nl/wp-json/wp/v2/categories'
const directus_url = 'https://fdnd-agency.directus.app/items/redpers_shares'

// Fetch posts from the API
const postsURL = `${apiUrl}/posts?per_page=27`;
const allpostsURL = `${apiUrl}/posts?per_page=100`;
const onePostURL = `${apiUrl}/posts?slug=`;
const categoriesURL = `${apiUrl}/categories?per_page=27`;
const sharesURL = `${directus_url}`; 


// GET route for the index page
app.get('/', function (request, response) {

    // Fetch posts, categories, and shares concurrently
    Promise.all([fetchJson(categoriesURL), fetchJson(postsURL), fetchJson(sharesURL)])
        .then(([categoriesData, postsData, sharesData]) => {
            // Map over the postsData array and add shares information to each article
            postsData.forEach((article) => {
                const shareInfo = sharesData.data.find((share) => share.slug === article.slug);
                article.shares = shareInfo ? shareInfo.shares : 0;
            });
            // Render index.ejs and pass the fetched data as 'posts' and 'categories' variables
            response.render('home', { categories: categoriesData, posts: postsData });
        })
        .catch((error) => {
            // Handle error if fetching data fails
            console.error('Error fetching data:', error);
            response.status(500).send('Error fetching data');
        });
});



app.get('/detail/:slug', function (request, response) {
    // Fetch posts concurrently
    // const postSlug = request.params.slug;
    Promise.all([fetchJson(`${onePostURL} + ${request.params.slug}`)])
        .then(([onePostData]) => {
            // Fetch JSON data from the specified URL, filtering by post slug.
            fetchJson(`${sharesURL}?filter[slug][_eq]=${postSlug}`)
            .then(({data}) => {
                // Assigns the number of shares from the first item in 'data', or 0 if 'data' is empty.
                const shares = data.length > 0 ? data[0].shares : 0;

                // Render index.ejs and pass the fetched data as 'posts' variables
                response.render('detail', {post: onePostData, shares});
            })
            .catch((error) => {
                console.error('Error fetching shares data:', error);
                // Render index.ejs and pass the fetched data as 'posts' 
                response.render('detail', { post: onePostData, shares: 0 });
            })

        })
        .catch((error) => {
            // Handle error if fetching data fails
            console.error('Error fetching data:', error);
            response.status(500).send('Error fetching data!');
        });
});


// POST route to increment shares count
app.post('/detail/:slug', (request, response) => {
    const postSlug = request.params.slug;

    // Fetch shares data for the given post slug
    fetchJson(`${sharesURL}?filter[slug][_eq]=${postSlug}`)
        .then(({ data }) => {
            // Perform a PATCH request on Directus API to update shares count
            fetchJson(`${sharesURL}/${data[0]?.id ? data[0].id : ''}`, {
                // Determine the HTTP request method based on the existence of data[0].id.
                // If data[0].id exists, use 'PATCH' method for updating existing resource,
                // otherwise, use 'POST' method for creating a new resource.
                method: data[0]?.id ? 'PATCH' : 'POST',

                // Set the headers for the HTTP request.
                // The 'Content-Type' header indicates that the content of the request body is in JSON format.
                headers: { 'Content-Type': 'application/json' },

                // Set the body of the HTTP request by converting a JavaScript object into a JSON string.
                body: JSON.stringify({

                     // Set the 'slug' property in the request body to the value of the postSlug variable.
                    slug: postSlug,

                     // Set the 'shares' property in the request body.
                    // If data contains at least one item, increment the 'shares' count by 1,
                    // otherwise, set the 'shares' count to 1.
                    shares: data.length > 0 ? data[0].shares + 1 : 1,
                }),
            })
            .then((result) => {
                // Redirect to the article page after updating shares count
                response.redirect(301, `/detail/${postSlug}`);
            })
            .catch((error) => {
                console.error('Error updating shares count:', error);
                // Redirect to the article page even if shares count cannot be updated
                response.redirect(301, `/detail/${postSlug}`);
            });
        })
        .catch((error) => {
            console.error('Error fetching shares data:', error);
            // Redirect to the article page if shares data cannot be fetched
            response.redirect(301, `/detail/${postSlug}`);
        });
});


// POST route for the index page
app.post('/', function (request, response) {
    // Currently not handling POST data, redirect to the homepage
    response.redirect(303, '/');
});


// Set the port number for express to listen on
app.set('port', process.env.PORT || 2024);

// Start express and listen on the specified port : 2024
app.listen(app.get('port'), function () {
    // Log a message to the console with the port number
    console.log(`yoo stuff is running on : http://localhost:${app.get('port')}`);
});