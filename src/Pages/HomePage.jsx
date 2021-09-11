import React, { useEffect, useState } from "react";

import DefaultPage from "../Pages/DefaultPage";
import LoadingPage from '../Pages/Loading'
import BannerMain from "../components/BannerMain";
import Carousel from "../components/Carousel";
import api from '../services/api';

const HomePage = () => {
  
  const [ apiData, setApiData ] = useState(() => [])

  useEffect(() => {
    api.get('mixed')
      .then(response => { setApiData(response.data) })
  }, [])
  
  return (
    apiData.length === 0 ? <LoadingPage /> : 
    <DefaultPage>
      <div>
        <BannerMain
          videoTitle={apiData[0].categoryVideos[4].videoName}
          url={apiData[0].categoryVideos[4].videoLink}
          videoDescription={apiData[0].categoryVideos[4].videoDescription}
        />               
        
        {apiData.map(category => {
          return <Carousel key={category.id} category={category} /> 
        })} 
      </div>
    </DefaultPage>
  );
};

export default HomePage;
