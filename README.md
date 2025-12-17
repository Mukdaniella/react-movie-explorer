# 🎬 Movie Explorer

Movie Explorer is a **Single Page Application (SPA)** built with **React** that allows users to explore, search, filter, and favorite movies. It’s designed to be interactive, responsive, and user-friendly.

---

## 📝 Features

- **Browse Movies:** Explore a list of movies fetched from a public API (TVMaze).  
- **Movie Details:** View detailed information for each movie.  
- **Search:** Search movies by name dynamically.  
- **Filter by Category:** Filter movies based on genres.  
- **Favorites:** Add or remove movies from your favorites, persisted in `localStorage`.  
- **Routing:** Navigate between pages using React Router:
  - `/` → Home (movie list)
  - `/movie/:id` → Movie details
  - `/favorites` → Favorite movies  
- **Responsive Design:** Works on desktop, tablet, and mobile.  
- **Custom Hooks:** `useFetchMovies` and `useFavorites` for reusability.  

**Bonus Features (Optional):**
- Dark/Light mode toggle  
- Animated movie cards  
- Modal for movie details  
- Pagination / Infinite scroll  

---

## 🛠️ Technologies Used

- **React** – Frontend library  
- **Tailwind CSS** – Styling  
- **React Router DOM** – Routing  
- **TVMaze API** – Movie data  
- **LocalStorage** – Persisting favorites  
- **Vite** – React development environment  

---

## 📂 Project Structure

src/
├─ components/
│ ├─ Navbar.jsx
│ ├─ MovieCard.jsx
│ ├─ SearchBar.jsx
│ └─ CategoryFilter.jsx
├─ pages/
│ ├─ Home.jsx
│ ├─ MovieDetails.jsx
│ └─ Favorites.jsx
├─ hooks/
│ ├─ useFetchMovies.js
│ └─ useFavorites.js
├─ utils/
│ └─ api.js
├─ App.jsx
└─ main.jsx

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mukdaniella/react-movie-explorer.git
   cd movie-explorer
2. Install dependencies:
   npm install
3.Run the development server:
  npm run dev
🎨 Usage

Browse movies on the Home page.

Click a movie card to see detailed information.
Use the search bar to find movies by name.
Use the category filter to narrow results.
Click the heart icon to add a movie to your favorites.
View all favorites on the Favorites page.

📷 Screenshots
<img width="1893" height="871" alt="Screenshot 2025-12-17 113634" src="https://github.com/user-attachments/assets/2deaca2b-acba-4d0b-a07c-16473b8ba261" />


