import React from 'react'

import DefaultPage from './DefaultPage'
import Loading from '../components/Loading'

const LoadingPage = () => {
    return (
        <DefaultPage>
            <Loading />
        </DefaultPage>
    )
}

export default LoadingPage