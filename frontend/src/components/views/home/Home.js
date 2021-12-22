import React, { useState, useEffect } from 'react';
import { getGames } from '../../../services/apiGames';
import './Home.css'
const Home = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetchGames();
  }, [])

  const fetchGames = () => {
    getGames().then(json => {
      if (json.error) {
        console.log("error");
      } else {
        setGames(json.data);
      }
    })
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }} className='my-5'>Home</h1>
      <div className='container'>
        <div className='row'>
          {games && games.map((game, i) => (
            <div key={i} className='col-4'>
              <div className='card'>
                Place of Game: {game.Place}
                Data time: {game.DateTime}
              </div>
            </div>
          ))
          }
        </div>
      </div>

    </>
  )
}

export default Home;