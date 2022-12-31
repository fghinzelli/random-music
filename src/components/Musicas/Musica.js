import { LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '../../components/Paper/Paper'
import { getChords } from '../../service/music';

const Musica = ({ artista, musica }) => {
  const [thisMusic, setThisMusic] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getChords(artista.slug, musica.slug).then(response => {
      setThisMusic(response.data);
      setLoading(false);
    })
    // eslint-disable-next-line
  }, [])

  let breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Artistas", link: "/artistas" },
    { text: artista.name, link: `/artistas/${artista.slug}` },
    { text: musica.desc, link: "" }
  ]

  function createMarkup() {
    return {__html: thisMusic ? "<pre>" + thisMusic + "</pre>" : ''};
  }

  return (
    <Paper breadcrumb={breadcrumb} title={musica.desc}>
      {loading ? <LinearProgress /> : <pre><div dangerouslySetInnerHTML={createMarkup()} /></pre>}
      
    </Paper>
  )
}


export default Musica