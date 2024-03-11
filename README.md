# single-page-app-project
 
This project demonstrates a simple Single Page Application using React with client-side routing. The application includes a Bootstrap navigation bar and dynamically loads content based on the selected route.
Technologies Used

    React
    Bootstrap 5.0.0-alpha1
    Babel

Project Structure

    index.html + other html files for contents: The main HTML file with Bootstrap styling and the root element for React.
    src/index.js: The entry point for React, creating and rendering the main component.
    src/app.jsx: The main React component (MyComponent) responsible for handling routing and rendering content.

Setup

    Clone the repository.
    Open the project in your preferred code editor.
    Run a local development server with node.js.

Usage

    The navigation bar includes links to different routes. Clicking on these links will update the URL without making a server side request.
    Content is dynamically loaded based on the selected route.

How It Works

    Navigation Bar: The Bootstrap navigation bar contains links that trigger route changes.

    React Component: This component manages the routing logic and dynamically loads content based on the current route using the window.location.hash.

    Content Loading: Content is loaded asynchronously using the fetch API, and the loaded HTML is injected into the designated element with the ID info.

    Routing: The useEffect hook listens for hash changes (hashchange event) and triggers the router function, which updates the content based on the current route.

    Cleanup: The useEffect hook also includes cleanup logic to remove the event listener when the component is unmounted, preventing memory leaks.

Important Note

    This project uses the dangerouslySetInnerHTML prop for rendering content. In a production environment, consider sanitizing and validating the loaded content to prevent security vulnerabilities.

Contributing

Feel free to contribute to the project by submitting issues or pull requests.
License

This project is licensed under the MIT License.