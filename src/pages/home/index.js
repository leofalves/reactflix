import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
};

function Home() {
  const categoryMainBanner = randomInt(0, 5);
  const VideoMainBanner = randomInt(0, 3);

  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[categoryMainBanner].videos[VideoMainBanner].titulo}
        url={dadosIniciais.categorias[categoryMainBanner].videos[VideoMainBanner].url}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Footer />

    </div>
  );
}

export default Home;
