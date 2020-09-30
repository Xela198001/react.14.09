import React from "react";
import { Route, Switch} from 'react-router-dom';
import Home from "../Home";
import About from "../About";
import Chats from "../Chats";

const RootRouter = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/Chats/id' component={Chats}/>
            <Route path='/about'><About/></Route>
        </Switch>
    )
}

export default RootRouter;