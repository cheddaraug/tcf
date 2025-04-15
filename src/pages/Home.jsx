import React, { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    document.title = 'The Code Factory | Your Website Built RIght';
  }, []);

  return (
    <div>Home</div>
  )
}

export default Home