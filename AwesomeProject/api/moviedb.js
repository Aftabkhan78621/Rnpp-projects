import axios from "axios";
import { apikey } from "../Constants";

// endpoints

const apiBaseUrl = "https://api.themoviedb.org/3";
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apikey}`;
const UpcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apikey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top-rated?api_key=${apikey}`;

export const image500 = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = (path) =>
  path ? `https://image.tmdb.org/t/p/w340${path}` : null;
export const image185 = (path) =>
  path ? `https://image.tmdb.org/t/p/w185${path}` : null;

// function which is implement api

const apiCall = async (endpoint, params) => {
  const options = {
    method: "Get",
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("error:", error);
    return {};
  }
};
export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
};
export const fetchUpcomingMovies = () => {
  return apiCall(UpcomingMoviesEndpoint);
};
export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};
