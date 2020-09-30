import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home.jsx";
import About from "../About.jsx";
import Chats from "../Chats.jsx";
import Layout from "../../components/Layout.jsx";

const RootRouter = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/chats/:id" component={Chats} />
      </Layout>
    </Switch>
  );
};
export default RootRouter;
