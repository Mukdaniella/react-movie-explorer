import { useState, useEffect } from "react";

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows") // Fetch TV shows
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        // Map API data to match our structure
        const mapped = data.map((item) => ({
          id: item.id,
          name: item.name,
          category: item.genres[0] || "Other",
          image: item.image?.medium || "https://via.placeholder.com/200x300",
          summary: item.summary ? item.summary.replace(/<\/?[^>]+(>|$)/g, "") : "No summary",
        }));
        setMovies(mapped);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { movies, loading, error };
};

export default useFetchMovies;
