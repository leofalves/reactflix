/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES_VIDEOS = `${config.URL_BACKEND}/categorias?_embed=videos`;
const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIES_VIDEOS)
    .then(async (RespostaDoServer) => {
      if (RespostaDoServer.ok) {
        const RespostaConvertida = await RespostaDoServer.json();
        return RespostaConvertida;
      }

      throw new Error('Não foi possível recuperar os dados :(');
    });
}

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (RespostaDoServer) => {
      if (RespostaDoServer.ok) {
        const RespostaConvertida = await RespostaDoServer.json();
        return RespostaConvertida;
      }

      throw new Error('Não foi possível recuperar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
