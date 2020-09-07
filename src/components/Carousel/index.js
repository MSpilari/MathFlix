import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './VideoCard';
import Slider, { SliderItem } from './Slider';

function Carousel({ category }) {
  
  const categoryTitle = category.categoryName;
  const categoryColor = category.categoryColor;
  const categoryExtraLink = 'https://github.com/MSpilari';
  const categoryDescription = category.categoryDescription;
  const videos = category.categoryVideos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink} target="_blank">
              {categoryDescription}  
            </ExtraLink>
          }
        </> 
      )}
      <Slider>
        {videos.map((video, index) => {
          return (
            <SliderItem key={index}>
              <VideoCard
                videoTitle={video.videoName}
                videoURL={video.videoLink}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;