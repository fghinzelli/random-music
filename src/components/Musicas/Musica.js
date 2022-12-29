import React, { useEffect, useState } from 'react';
import Paper from '../../components/Paper/Paper'
import { getChords } from '../../service/music';

const Musica = ({ artista, musica }) => {
  const [thisMusic, setThisMusic] = useState(null)

  useEffect(() => {
    getChords(artista.slug, musica.slug).then(response => {
      console.log(response)
      setThisMusic(response)
    })
    // eslint-disable-next-line
  }, [])

  let breadcrumb = [
    { text: "Home", link: "/" },
    { text: musica.desc, link: "" }
  ]

  return (
    <Paper breadcrumb={breadcrumb} title={musica.desc}>
      <pre>
        { thisMusic } 
      </pre>
    </Paper>
  )
}


export default Musica