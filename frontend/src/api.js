import axios from 'axios';
import cheerio from 'cheerio';

const SEARCH_SONGS_API = 'https://studiosolsolr-a.akamaihd.net/cc/h2/';

const getChordsApi = (artist, song) =>
    `https://www.cifraclub.com.br/${artist}/${song}/imprimir.html`
const getArtistApi = artistSlug =>
    `https://www.vagalume.com.br/${artistSlug}/index.js`

// Tells us that this entry is a song, and not an artist
const CIFRACLUB_SONG_ID = '2'

/**
 * Receives a part of a song name and search for songs in CifraClub
 */
export const Services = {
    songs: async (name) => {
        const response = await axios.get(SEARCH_SONGS_API, {
            params: { q: name },
        })
        const rawData = response.data
        const processed = JSON.parse(rawData.slice(1).slice(0, rawData.length - 3))
        if (!processed.response.docs) {
            return [];
        }
        const entries = processed.response.docs

        const finalResult = entries
            .filter(entry => entry.t === CIFRACLUB_SONG_ID)
            // Change properties from CifraClub to a more human-readable fancy
            .map(({ m, a, u, d }) => ({
                name: m,
                slug: u,
                artist: {
                    name: a,
                    slug: d
                }
            }))
            .map(song => {
                return axios.get(getArtistApi(song.artist.slug))
                    .then(response => ({ ...song, genre: response.data.artist && response.data.artist.genre && response.data.artist.genre[0].name }), () => ({ ...song }))
            })
        const songs = await Promise.all(finalResult)
        console.log(songs)

        // res.json(songs)
    },
    chords: async (artist, song) => {
        try {
            const response = await axios.get(getChordsApi(artist, song))
            const $ = cheerio.load(response.data)
            $('.tablatura').remove()
            return $('pre').html()
        } catch (e) {
            return null;
        }
    }, 
    artists: async (artistSlug, complete) => {
        try {
            const response = await axios.get(getArtistApi(artistSlug))
            const artist = response.data.artist

            if (!artist) return null

            let artistResponse = {
                name: artist.desc,
                imgUrl: artist.pic_small,
                genre: artist.genre ? artist.genre[0].name : undefined,
            }

            if (complete) {
                artistResponse = { ...artistResponse, topLyrics: artist.toplyrics.item }
            }
            return artistResponse
        } catch (e) {
            return null
        }
    }
}