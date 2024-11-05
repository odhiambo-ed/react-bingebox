# React Bingebox

React Bingebox is a Netflix-inspired web application built using React, Firebase, and The Movie Database (TMDb) API. It allows users to browse and watch trailers of popular movies and TV shows.

## Features

- **User Authentication**: Sign up and sign in using Firebase Authentication.
- **Responsive Design**: Fully responsive design that works on all devices.
- **Dynamic Content**: Fetches movie and TV show data from TMDb API.
- **Interactive UI**: Smooth scrolling and interactive elements for a seamless user experience.
- **Dark Mode**: Aesthetic dark theme for comfortable viewing.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Firebase**: Backend-as-a-Service for authentication and database.
- **TMDb API**: Source for movie and TV show data.
- **React Router**: For handling navigation within the app.
- **CSS Modules**: For styling components with scoped CSS.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A Firebase project set up with authentication enabled.
- TMDb API key.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-bingebox.git
   cd react-bingebox
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add your Firebase and TMDb API keys:

   ```plaintext
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

- **Sign Up/Sign In**: Create an account or log in to access the app.
- **Browse Content**: Explore different categories like "Now Playing", "Top Rated", "Upcoming", and "Popular".
- **Watch Trailers**: Click on a movie or TV show to watch its trailer.

## Project Structure

- `src/components`: Contains reusable components like Navbar, Footer, and Cards.
- `src/pages`: Contains main pages like Home, Login, and Play.
- `src/assets`: Contains images and other static assets.
- `src/firebase.js`: Firebase configuration and authentication functions.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing movie and TV show data.
- [Firebase](https://firebase.google.com/) for backend services.
- [React](https://reactjs.org/) for the frontend framework.

## Contact

For any questions or feedback, please contact [yourname@example.com](mailto:yourname@example.com).
