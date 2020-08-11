import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import ValidateCnpj from './pages/ValidateCnpj'
// import ValidateCnpjRF from './pages/CnpjValidator'
// import Landing from './pages/Landing'

function Routes() {
    return(
        <BrowserRouter>
            {/* <Route path="/" exact component={Landing}/> */}
            <Route path="/ValidateCnpj" component={ValidateCnpj}/>
            {/* <Route path="/give-ValidateCnpjRF" component={ValidateCnpjRF}/> */}
        </BrowserRouter>
    )
}

export default Routes