import axios from 'axios';
const API = 'https://api.tvmaze.com';
export const fetchAllShows = () => axios.get(`${API}/shows`);
export const fetchShow = (id) => axios.get(`${API}/shows/${id}`);
export const searchShows = (q) => axios.get(`${API}/search/shows?q=${q}`);
