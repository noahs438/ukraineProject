import  React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import dotenv from 'dotenv';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth';
import {GoogleOAuthProvider} from "@react-oauth/google";

dotenv.config()

const App = () => (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
        <BrowserRouter>
            <Container maxWidth={"lg"}>
                <Navbar />
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/auth'} exact component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>
    </GoogleOAuthProvider>
);


export default App;