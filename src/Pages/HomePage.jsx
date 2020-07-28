import React from "react";

import DefaultPage from "../Pages/DefaultPage";
import BannerMain from "../components/BannerMain";
import Carousel from "../components/Carousel";
import Data from "../data/dados_iniciais.json";

const HomePage = () => {
  return (
    <DefaultPage>
      <div>
        <BannerMain
          videoTitle={Data.categorias[0].videos[0].titulo}
          url={Data.categorias[0].videos[0].url}
          videoDescription={"O que é Front-end"}
        />

        <Carousel ignoreFirstVideo category={Data.categorias[0]} />

        <Carousel category={Data.categorias[1]} />

        <Carousel category={Data.categorias[2]} />

        <Carousel category={Data.categorias[3]} />

        <Carousel category={Data.categorias[4]} />

        <Carousel category={Data.categorias[5]} />
      </div>
    </DefaultPage>
  );
};

export default HomePage;
