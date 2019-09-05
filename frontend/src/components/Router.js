import { Switch, Route } from 'react-router-dom';
import React from 'react';
import QuoteContainer from './quote-container';
import AddQuote from './AddQuote';

const Router = () => (
    <Switch>
            <Route exact path="/" component={QuoteContainer} />
            <Route exact path="/add-quote" component={AddQuote} />
    </Switch>

)

export default Router