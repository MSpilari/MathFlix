import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import RegisterVideo from './Pages/RegisterVideo'
import Page404 from './Pages/Page404'
import RegisterCategory from './Pages/RegisterCategory'


function App(){
    return(
        <>
            <Switch>
                <Route path='/' exact  component={ HomePage }/>
                <Route path='/cadastro/video' component={ RegisterVideo }/>
                <Route path='/cadastro/category' component={ RegisterCategory } />
                <Route component={ Page404 }/>
            </Switch>
        </>
    )
}

export default App