import axios from "axios";
import cheerio from "cheerio";
import {
  SEARCH_SONGS_API,
  LISTA_ARTISTAS,
  CIFRACLUB_SONG_ID,
  VAGALUME_URL,
  CIFRACLUB_URL,
} from "../config";

const getChordsApi = (artist, song) =>
  `${CIFRACLUB_URL}/${artist}/${song}/imprimir.html`;
const getArtistApi = (artistSlug) => `${VAGALUME_URL}/${artistSlug}/index.js`;

export const getSongs = async (name) => {
  const response = await axios.get(SEARCH_SONGS_API, {
    params: { q: name },
  });
  const rawData = response.data;
  const processed = JSON.parse(rawData.slice(1).slice(0, rawData.length - 3));
  if (!processed.response.docs) {
    return [];
  }
  const entries = processed.response.docs;

  const finalResult = entries
    .filter((entry) => entry.t === CIFRACLUB_SONG_ID)
    // Change properties from CifraClub to a more human-readable fancy
    .map(({ m, a, u, d }) => ({
      name: m,
      slug: u,
      artist: {
        name: a,
        slug: d,
      },
    }))
    .map((song) => {
      return axios.get(getArtistApi(song.artist.slug)).then(
        (response) => ({
          ...song,
          genre:
            response.data.artist &&
            response.data.artist.genre &&
            response.data.artist.genre[0].name,
        }),
        () => ({ ...song })
      );
    });
  const songs = await Promise.all(finalResult);

  return songs;
};
