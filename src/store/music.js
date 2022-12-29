import React, { useState } from 'react';

const MusicContext = React.createContext({
    artist: {},
    setArtist: (a) => {},
    music: {},
    setMusic: (g) => {}
});

export const MusicContextProvider = props => {
    const [ artist, setArtist ] = useState(null);
    const [ music, setMusic ] = useState(null);

    const artistHandle = artist => setArtist(artist);

    const musicHandle = music => setMusic(music);

    return (
        <MusicContext.Provider value={{ 
            artist: artist,
            setArtist: artistHandle,
            music: music,
            setMusic: musicHandle
        }}>
            {props.children}
        </MusicContext.Provider>
    )
}

export default MusicContext