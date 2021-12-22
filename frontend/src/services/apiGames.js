import axios from 'axios'

export const getGames = () => {
  return axios.get('http://localhost:5000/api/games');
}