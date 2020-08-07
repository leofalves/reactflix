/* eslint-disable no-trailing-spaces */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';
import '../../components/loading.css';

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

function Home() {
  const categoryMainBanner = randomInt(0, 5);
  const VideoMainBanner = randomInt(0, 3);
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div className="lds-dual-ring" />)}

      {dadosIniciais.map((categoria, indice) => {       
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[categoryMainBanner].videos[VideoMainBanner].titulo}
                url={dadosIniciais[categoryMainBanner].videos[VideoMainBanner].url}
              />
              <Carousel
                key={categoria.id}
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}  

    </PageDefault>
  );
}

export default Home;
