import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL = `http://gateway.marvel.com/v1/public/characters`;
const HASH_KEY = `${API_KEY}`



const getHeroes = async () => {
  let heroName  = document.querySelector("#heroName").value;

  const resp = await axios(`${BASE_URL}?name=${heroName}&ts=1&apikey=${HASH_KEY}`);
  console.log(resp.data.data.results[0]);
  return resp.data.data.results[0];
}

export default getHeroes
