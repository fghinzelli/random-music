import React, { useEffect } from 'react';
import { getChords } from '../../service/music';

const Musica = ({artista, musica}) => {
  useEffect(() => {
    getChords(artista, musica).then(response => {
      console.log(response)
    })
    // eslint-disable-next-line
  }, [])  
  return (
    <h1>Música</h1>
  )
}


export default Musica