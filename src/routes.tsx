import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import ValidateCnpj from './pages/ValidateCnpj'
import Landing from './pages/Landing'
import RetangleIntersection from './pages/RetangleIntersection'


function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/ValidateCnpj" component={ValidateCnpj}/>
            <Route path="/RetangleIntersection" component={RetangleIntersection}/>
        </BrowserRouter>
    )
}

export default Routes