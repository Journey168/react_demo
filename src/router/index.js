import React, {Component} from 'react'
import {Switch ,Route, Redirect} from 'react-router-dom'

import Index from "../view/index"
import Book from "../view/book/book"
import User from "../view/user/user"
import Details from "../view/details/details"
import About from "../view/about/about"

class RouterIndex extends Component{
    render(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(
                    <Redirect to="/index/all"/>
                )}/>
                <Route path="/index/:id" component={Index}/>
                <Route path="/book" component={Book}/>
                <Route path="/user" component={User}/>
                <Route path="/details" component={Details}/>
                <Route path="/about" component={About}/>
            </Switch>
        )
    }
}

export default RouterIndex;