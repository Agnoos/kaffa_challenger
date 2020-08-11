import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import ValidateCnpj from './pages/ValidateCnpj'
import Landing from './pages/Landing'
import RetangleIntersection from './pages/RetangleIntersection'
import RestClientService from './pages/RestClientService'



function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" component={Landing}></Route>
            <Route path="/ValidateCnpj" component={ValidateCnpj}/>
            <Route path="/RetangleIntersection" component={RetangleIntersection}/>
            <Route path="/RestClientService" component={RestClientService}/>
        </BrowserRouter>
    )
}

export default Routes