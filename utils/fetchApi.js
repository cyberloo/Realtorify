import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': 'c728b62230msh142a62c7f52e184p152661jsn030d41b97dbd',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}