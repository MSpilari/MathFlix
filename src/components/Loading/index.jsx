import React from 'react'
import Lottie from 'react-lottie'
import LoadingAnimation from '../../assets/7908-loading.json'

import { AnimationWrapper, AnimationDiv, Text } from './styles'

const Loading = () => {
    
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: LoadingAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
    return(
        <AnimationWrapper>
            <AnimationDiv>
                <Lottie  options={defaultOptions}/>
            </AnimationDiv> 
            <Text>Please, wait a second !!!<br/> We are loading the Fun !</Text>
        </AnimationWrapper>
    )
}

export default Loading