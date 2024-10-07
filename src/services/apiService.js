// src/services/apiService.js
import axios from 'axios';

// Define your API key and base URL
const API_KEY = 'YOUR_API_KEY_HERE';
const BASE_URL = 'https://api.example.com'; // Replace with your API's base URL

// Function to fetch movies
export const fetchMovies = async (query) => {
    try {
        // Make a GET request
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                query: query,
                language: 'en-US',
                page: 1,
                include_adult: false,
            }
        });
        // Return the results
        return response.data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
        // Handle errors or return empty array
        return [];
    }
};
