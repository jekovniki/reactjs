import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Publications from './pages/publications'
import ShareThoughtsPage from './pages/share-thoughts'
import Register from  './pages/register'
import Login from  './pages/login'



const Navigation = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ Publications } />
            <Route path="/share" exact component={ ShareThoughtsPage } />
            <Route path="/register" exact component={ Register } />
            <Route path="/login" exact component={ Login } />


        </Switch>
        </BrowserRouter>
    )
}

export default Navigation