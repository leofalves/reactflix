/* eslint-disable linebreak-style */
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoVideo) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoVideo),
  })
    .then(async (RespostaDoServer) => {
      if (RespostaDoServer.ok) {
        const RespostaConvertida = await RespostaDoServer.json();
        return RespostaConvertida;
      }
      throw new Error('Não foi possível recuperar os dados');
    });
}

export default {
  create,
};
